const router = require('express').Router();
const passport = require('passport');

// Auth with Google
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

// Google auth callback
router.get('/google/callback', passport.authenticate('google'), (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('https://caption-generate-with-gemini-project-1.onrender.com'); 
});

router.get('/logout', (req, res, next) => {
    // Destroy the session
    req.logout(function(err) {
        if (err) {
            return next(err);
        }

        // If you're using express-session:
        req.session.destroy(function(err) {
            if (err) {
                return next(err);
            }

            // Clear the cookie that stores the session ID
            res.clearCookie('connect.sid'); // 'connect.sid' is the default session cookie name for express-session

            // Send a success response or redirect the user
            res.send("Successfully logged out, session cleared.");
        });
    });
});

// Get current user
router.get('/current_user', (req, res) => {
    res.send(req.user);
});

module.exports = router;
