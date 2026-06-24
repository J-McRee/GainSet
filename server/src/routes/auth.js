const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { db } = require('../db');
const { users } = require('../db/schema');
const { eq } = require('drizzle-orm');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password || !name) {
    return res.status(400).json({ success: false, error: 'email, password, and name are required' });
  }

  const existing = db.select().from(users).where(eq(users.email, email)).get();
  if (existing) {
    return res.status(409).json({ success: false, error: 'Email already registered' });
  }

  const passwordHash = await bcrypt.hash(password, 12);
  const result = db.insert(users).values({ email, passwordHash, name }).returning().get();

  const token = jwt.sign({ id: result.id, email: result.email }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  res.status(201).json({ success: true, data: { token, user: { id: result.id, email: result.email, name: result.name } } });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ success: false, error: 'email and password are required' });
  }

  const user = db.select().from(users).where(eq(users.email, email)).get();
  if (!user) {
    return res.status(401).json({ success: false, error: 'Invalid credentials' });
  }

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) {
    return res.status(401).json({ success: false, error: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  res.json({ success: true, data: { token, user: { id: user.id, email: user.email, name: user.name } } });
});

module.exports = router;
