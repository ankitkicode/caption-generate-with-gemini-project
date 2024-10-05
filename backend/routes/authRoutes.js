const router = require('express').Router();
const passport = require('passport');

// Auth with Google
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

router.get('/google/callback', 
    passport.authenticate('google', {
      failureRedirect: 'https://caption-generate-with-gemini-project-1.onrender.com/login-failed'
    }), 
    (req, res) => {
      // Successful authentication
      res.redirect('https://caption-generate-with-gemini-project-1.onrender.com'); 
    }
  );

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

router.get('/current_user', (req, res) => {
    if (req.user) {
        res.json({ user: req.user });
    } else {
        res.status(401).json({ message: 'No user logged in' });
    }
});

module.exports = router;
