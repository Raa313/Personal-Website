FROM node:18-alpine

WORKDIR /app

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Disable Angular analytics
RUN ng analytics disable --global

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Expose port
EXPOSE 4200

# Start development server
CMD ["ng", "serve", "--host", "0.0.0.0", "--poll", "2000"]