// These routes handle authentication to the application
const passport = require('passport');

module.exports = app => {
  app.get('/oauth/google', passport.authenticate('google', {
      scope: ['profile', 'email']
  }));

  app.get('/oauth/google/callback', passport.authenticate('google'));

  app.get('/logout', (req, res) => {
    req.logout();
    res.send('Logged out!');
  });
}
