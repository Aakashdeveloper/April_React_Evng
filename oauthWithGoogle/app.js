const express = require('express');
const app = express()
const passport = require('passport');
const port = 9800;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

app.use(passport.initialize())

passport.serializeUser((user,cb) => {
    cb(null,user)
})

passport.use(new GoogleStrategy({
    clientID: '',
    clientSecret: '',
    callbackURL: "http://localhost:9800/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
       userProfile = profile
       return done(null, userProfile);
  }
));

app.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/error' }),
  function(req, res) {
    res.redirect('/profile');
});


app.get('/',(req,res) => {
    res.send('<a href="/auth/google">Sign In with Google</a>')
})

app.get('/error',(req,res) => {
    res.send('Error While Login')
})

app.get('/profile',(req,res) => {
    res.send(userProfile)
})

app.listen(9800)