const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const droneRoutes = require('./routes/drone'); // ปรับ path ตามจริง
const authRoutes = require('./routes/auth');   // ปรับ path ตามจริง

const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(rateLimit({
  windowMs: 60 * 1000,
  max: 30,
  message: { error: 'Too many requests, please try again later.' }
}));
app.use(express.json());

// Routes
app.use('/', droneRoutes);
app.use('/auth', authRoutes);

// Export as serverless function
module.exports = serverless(app);