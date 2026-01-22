const express = require('express');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// PostgreSQL connection pool
const pool = new Pool({
  host: process.env.DATABASE_HOST || 'postgres',
  port: process.env.DATABASE_PORT || 5432,
  database: process.env.DATABASE_NAME || 'vtt_db',
  user: process.env.DATABASE_USER || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'postgres123',
});

// Test database connection
pool.connect((err, client, release) => {
  if (err) {
    console.error('Error connecting to database:', err.stack);
  } else {
    console.log('Database connected successfully');
    release();
  }
});

// JWT Secret
const JWT_SECRET = process.env.JWT_SECRET || 'change-this-secret-key';

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }
    req.user = user;
    next();
  });
};

// --------- //
// AUTH SHIT //
// --------- //

// Create new user
app.post('/api/auth/register', async (req, res) => {
  const { email, password, username } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
      'INSERT INTO users (email, password_hash, username) VALUES ($1, $2, $3) RETURNING user_id, email, username, created_at',
      [email, hashedPassword, username || null]
    );

    const user = result.rows[0];
    const token = jwt.sign({ userId: user.user_id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });

    res.status(201).json({
      message: 'User created successfully',
      user: { id: user.user_id, email: user.email, username: user.username },
      token
    });
  } catch (error) {
    if (error.code === '23505') {
      res.status(409).json({ error: 'Email already exists' });
    } else {
      console.error('Registration error:', error);
      res.status(500).json({ error: 'Server error during registration' });
    }
  }
});

// Sign in
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const user = result.rows[0];
    const validPassword = await bcrypt.compare(password, user.password_hash);

    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    await pool.query('UPDATE users SET last_login = CURRENT_TIMESTAMP WHERE user_id = $1', [user.user_id]);

    const token = jwt.sign({ userId: user.user_id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });

    res.json({
      message: 'Login successful',
      user: { id: user.user_id, email: user.email, username: user.username },
      token
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Server error during login' });
  }
});


// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});