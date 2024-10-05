require("dotenv").config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/userModel');


// Ensure environment variables are available
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

// console.log({
//     CLIENT_ID,
//     CLIENT_SECRET
// })

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use(new GoogleStrategy({
    clientID:CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: 'http://localhost:5000/auth/google/callback' 
}, async (accessToken, refreshToken, profile, done) => {
    // console.log('Google profile:', profile);
    // Extract the email from the profile
    const email = profile.emails[0].value; 

    // Check if the user already exists in the database
    const existingUser = await User.findOne({ googleId: profile.id });

    if (existingUser) {
        done(null, existingUser);
    } else {
        // Create a new user with the email included
        const newUser = await new User({
            googleId: profile.id,
            username: profile.displayName,
            email: email, // Save the email to the database
            thumbnail: profile._json.picture
        }).save();
        done(null, newUser);
    }
}));
