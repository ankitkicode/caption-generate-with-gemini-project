const { google } = require('googleapis');
require('dotenv').config();

const googleClientId = process.env.GOOGLR_CLIENT_ID;
const googleClientSecret = process.env.GOOGLR_CLIENT_SECRET;


// Ensure the redirect URI matches
const  oauth2Client = new google.auth.OAuth2(
    googleClientId,
    googleClientSecret,
);

module.exports = oauth2Client
