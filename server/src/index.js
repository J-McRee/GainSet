require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { requireAuth } = require('./middleware/auth');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(express.json());

app.use('/api/v1/auth', authRoutes);

// Health check (public)
app.get('/api/v1/health', (_req, res) => {
  res.json({ success: true, data: { status: 'ok' } });
});

// All routes below require auth
app.use('/api/v1', requireAuth);

app.get('/api/v1/me', (req, res) => {
  res.json({ success: true, data: { user: req.user } });
});

app.listen(PORT, () => {
  console.log(`Gainset server running on http://localhost:${PORT}`);
});
