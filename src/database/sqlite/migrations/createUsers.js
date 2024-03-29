const createUsers = `
CREATE TABLE IF NOT EXISTS users (
id INTEGER PRIMARY KEY AUTOINCREMENT,
name VARCHAR,
email VARCHAR,
password VARCHAR,
avatar VARCHAR NULL,
theme_preference VARCHAR DEFAULT 'light',
role TEXT CHECK( role IN ('admin', 'usuario') ) NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`;

module.exports = createUsers;