/*
* @Author: Akshata
* @Date:   2018-06-29 23:41:11
* @Last Modified by:   Akshata
* @Last Modified time: 2018-06-29 23:46:08
*/

var passport = require('passport');
var LinkedInStrategy = require('passport-linkedin');

var config = require('../auth_config');
var init = require('./init');

passport.use(new LinkedInStrategy({
    consumerKey: config.linkedin.clientID,
    consumerSecret: config.linkedin.clientSecret,
    callbackURL: config.linkedin.callbackURL
  },
  function(token, tokenSecret, profile, done) {
   	return done(null, profile);
  }
));

// serialize user into the session
init();


module.exports = passport;