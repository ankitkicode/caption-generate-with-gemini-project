const express = require('express');
const { generateCaption } = require('../controllers/captionController'); // Ensure this path is correct
const isAuthenticated = require('../middleware/authMiddleware'); // Ensure this path is correct
const router = express.Router();

// Route definition
router.post('/generateCaption', isAuthenticated, generateCaption);

module.exports = router;
