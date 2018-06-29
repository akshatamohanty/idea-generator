/*
* @Author: Akshata
* @Date:   2018-06-29 23:41:00
* @Last Modified by:   Akshata
* @Last Modified time: 2018-06-30 01:07:28
*/

var passport = require('passport');

module.exports = function() {

  passport.serializeUser(function(user, done) {
  		console.log(user);
    	return done(null, user);
  });

  passport.deserializeUser(function(id, done) {
    	return done(null, id);
  });

};