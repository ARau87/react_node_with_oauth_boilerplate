// Setting up passport for oauth 2.0 google login
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const mongoose = require('mongoose');

const keys = require('../config/keys');
const User = mongoose.model('users');

// Setup for serializing and deserializing users
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
      .then(user  => done(null, user))
      .catch(err => done(err));
});

// OAuth2.0 login section
passport.use(new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret : keys.googleClientSecret,
      callbackURL: '/oauth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({googleId: profile.id})
          .then(existingUser => {
            if(!existingUser){
              new User({googleId: profile.id})
            }
            else {
              done(null, existingUser)
            }
          })
    }
  )
);
