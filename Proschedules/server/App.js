// server/app.js (server-side entry point)
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes');

// Create the Express app
const app = express();

// Middleware
app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse incoming requests with JSON payloads

// Routes
app.use('/api/auth', authRoutes); // Authentication routes (login/signup)
app.use('/api/schedule', scheduleRoutes); // Schedule-related routes

// MongoDB connection (example, update with your connection string)
mongoose.connect('mongodb://localhost:27017/proschedules', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected successfully');
}).catch(err => {
  console.log('MongoDB connection error:', err);
});

// Export the app (useful for testing or running in other files)
module.exports = app;
