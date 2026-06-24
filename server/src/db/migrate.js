require('dotenv').config();
const { migrate } = require('drizzle-orm/better-sqlite3/migrator');
const { db, sqlite } = require('./index');
const path = require('path');
const fs = require('fs');

const dataDir = path.join(__dirname, '../../../data');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

migrate(db, { migrationsFolder: path.join(__dirname, 'migrations') });
console.log('Migrations applied.');
sqlite.close();
