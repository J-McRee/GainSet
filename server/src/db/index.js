const Database = require('better-sqlite3');
const { drizzle } = require('drizzle-orm/better-sqlite3');
const path = require('path');
const schema = require('./schema');

const dbPath = process.env.DATABASE_PATH || path.join(__dirname, '../../../data/gainset.db');
const sqlite = new Database(dbPath);

sqlite.pragma('journal_mode = WAL');
sqlite.pragma('foreign_keys = ON');

const db = drizzle(sqlite, { schema });

module.exports = { db, sqlite };
