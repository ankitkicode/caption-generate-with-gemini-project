const express = require('express');
const dotenv = require('dotenv');
const passport = require('passport');
const cors = require('cors');
const expressSession = require('express-session');
const captionRoutes = require('./routes/captionRoutes');
const authRoutes = require('./routes/authRoutes');

// Load environment variables
dotenv.config();

// Initialize the Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Import Passport setup and database connection
require('./utils/passport-setup');
require('./database/dbConnection')();

// Middleware for handling JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS configuration for your frontend
app.use(cors({
  origin: 'https://caption-generate-with-gemini-project-1.onrender.com', // Allow requests from your frontend
  credentials: true // Allow cookies to be sent from your frontend
}));

// Express session configuration
app.use(expressSession({
  secret: process.env.SESSION_SECRET || 'your_secret_key', 
  resave: false,
  saveUninitialized: false,
    cookie: {
    secure: true,
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000
  }
}));

// Initialize Passport and handle sessions
app.use(passport.initialize());
app.use(passport.session());

// Test route to verify the server is running
app.get("/", (req, res) => {
  res.send("Hello World");
});

// API routes
app.use('/api', captionRoutes);
app.use('/auth', authRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
