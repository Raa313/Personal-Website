-- Users table
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    username VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP,
    Campaign_ids INT[] DEFAULT ARRAY[]::INT[],
    Character_ids INT[] DEFAULT ARRAY[]::INT[]
);

CREATE TABLE campaigns (
    campaign_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    created_by INT REFERENCES users(user_id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE boards (
    board_id SERIAL PRIMARY KEY,
    campaign_id INT REFERENCES campaigns(campaign_id),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    grid_size INT DEFAULT 50,
    grid_visible BOOLEAN DEFAULT TRUE
);

CREATE TABLE characters (
    character_id SERIAL PRIMARY KEY,
    created_by INT REFERENCES users(user_id),
    campaign_id INT REFERENCES campaigns(campaign_id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    name VARCHAR(255) NOT NULL,
    class VARCHAR(100),
    level INT DEFAULT 1,
    Race VARCHAR(100),
    Alighnment VARCHAR(100),
    Experience_Points INT DEFAULT 0,

    Strength INT DEFAULT 7,
    Strength_Modifier INT DEFAULT 0,
    Dexterity INT DEFAULT 7,
    Dexterity_Modifier INT DEFAULT 0,
    Constitution INT DEFAULT 7,
    Constitution_Modifier INT DEFAULT 0,
    Intelligence INT DEFAULT 7,
    Intelligence_Modifier INT DEFAULT 0,
    Wisdom INT DEFAULT 7,
    Wisdom_Modifier INT DEFAULT 0,
    Charisma INT DEFAULT 7,

    Charisma_Modifier INT DEFAULT 0,
    Total_Hit_Points INT DEFAULT 10,
    Current_Hit_Points INT DEFAULT 10,
    Death_Saves_Successes INT DEFAULT 0,
    Death_Saves_Failures INT DEFAULT 0,
    Hit_Dice VARCHAR(50) DEFAULT '1d10',
    Armor_Class INT DEFAULT 10,
    Initiative INT DEFAULT 0,
    Speed INT DEFAULT 30,
    Passuive_Wisdom(Perception) INT DEFAULT 10,

    Proficiency_Bonus INT DEFAULT 2,
    Inspiration BOOLEAN DEFAULT FALSE,

    Saving_Throws_Strength_Proficient BOOLEAN DEFAULT FALSE,
    Saving_Throws_Strength_Proficient_Modifier INT DEFAULT 0,
    Saving_Throws_Dexterity_Proficient BOOLEAN DEFAULT FALSE,
    Saving_Throws_Dexterity_Proficient_Modifier INT DEFAULT 0,
    Saving_Throws_Constitution_Proficient BOOLEAN DEFAULT FALSE,
    Saving_Throws_Constitution_Proficient_Modifier INT DEFAULT 0,
    Saving_Throws_Intelligence_Proficient BOOLEAN DEFAULT FALSE,
    Saving_Throws_Intelligence_Proficient_Modifier INT DEFAULT 0,
    Saving_Throws_Wisdom_Proficient BOOLEAN DEFAULT FALSE,
    Saving_Throws_Wisdom_Proficient_Modifier INT DEFAULT 0,
    Saving_Throws_Charisma_Proficient BOOLEAN DEFAULT FALSE,
    Saving_Throws_Charisma_Proficient_Modifier INT DEFAULT 0,

    Skills_Acrobatics_Proficient BOOLEAN DEFAULT FALSE,
    Skills_Acrobatics_Proficient_Modifier INT DEFAULT 0,
    Skills_Animal_Handling_Proficient BOOLEAN DEFAULT FALSE,
    Skills_Animal_Handling_Proficient_Modifier INT DEFAULT 0,
    Skills_Arcana_Proficient BOOLEAN DEFAULT FALSE,
    Skills_Arcana_Proficient_Modifier INT DEFAULT 0,
    Skills_Athletics_Proficient BOOLEAN DEFAULT FALSE,
    Skills_Athletics_Proficient_Modifier INT DEFAULT 0,
    Skills_Deception_Proficient BOOLEAN DEFAULT FALSE,
    Skills_Deception_Proficient_Modifier INT DEFAULT 0,
    Skills_History_Proficient BOOLEAN DEFAULT FALSE,
    Skills_History_Proficient_Modifier INT DEFAULT 0,
    Skills_Insight_Proficient BOOLEAN DEFAULT FALSE,
    Skills_Insight_Proficient_Modifier INT DEFAULT 0,
    Skills_Intimidation_Proficient BOOLEAN DEFAULT FALSE,
    Skills_Intimidation_Proficient_Modifier INT DEFAULT 0,
    Skills_Investigation_Proficient BOOLEAN DEFAULT FALSE,
    Skills_Investigation_Proficient_Modifier INT DEFAULT 0,
    Skills_Medicine_Proficient BOOLEAN DEFAULT FALSE,
    Skills_Medicine_Proficient_Modifier INT DEFAULT 0,
    Skills_Nature_Proficient BOOLEAN DEFAULT FALSE,
    Skills_Nature_Proficient_Modifier INT DEFAULT 0,
    Skills_Perception_Proficient BOOLEAN DEFAULT FALSE,
    Skills_Perception_Proficient_Modifier INT DEFAULT 0,
    Skills_Performance_Proficient BOOLEAN DEFAULT FALSE,
    Skills_Performance_Proficient_Modifier INT DEFAULT 0,
    Skills_Persuasion_Proficient BOOLEAN DEFAULT FALSE,
    Skills_Persuasion_Proficient_Modifier INT DEFAULT 0,
    Skills_Religion_Proficient BOOLEAN DEFAULT FALSE,
    Skills_Religion_Proficient_Modifier INT DEFAULT 0,
    Skills_Sleight_of_Hand_Proficient BOOLEAN DEFAULT FALSE,
    Skills_Sleight_of_Hand_Proficient_Modifier INT DEFAULT 0,
    Skills_Stealth_Proficient BOOLEAN DEFAULT FALSE,
    Skills_Stealth_Proficient_Modifier INT DEFAULT 0,
    Skills_Survival_Proficient BOOLEAN DEFAULT FALSE,
    Skills_Survival_Proficient_Modifier INT DEFAULT 0,
    
    Other_Proficiencies_and_Languages TEXT,
    Features_and_Traits TEXT,
    Equipment TEXT
    Flaws TEXT,
    Bonds TEXT,
    Ideals TEXT,
    Personality_Traits TEXT
    Spells TEXT, -- TODO improve
    Attacks TEXT, -- TODO improve
);

-- Create indexes for better performance
CREATE INDEX idx_users_email ON users(email);