/*
* @Author: Akshata
* @Date:   2018-06-27 21:55:39
* @Last Modified by:   Akshata
* @Last Modified time: 2018-06-30 01:38:39
*/


var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
var passport = require('passport');
var session = require('express-session');
var cookieParser = require('cookie-parser');
//var cookieSession = require('cookie-session');


var app = express();
app.use(cors())
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'dist')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({ secret: 'keyboard cat', key: 'sid', resave: false }))
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser())




// --- Authentication
var passportLinkedIn = require('./auth/linkedin');
app.get('/auth/linkedin', passportLinkedIn.authenticate('linkedin'));

app.get('/auth/linkedin/callback',
  passportLinkedIn.authenticate('linkedin', { failureRedirect: '/' }),
  function(req, res) {
    console.log(req.header('Referer'))
    res.redirect(req.header('Referer'))
});

app.get('/logout', function(req, res){
  req.logout();
  res.redirect(req.header('Referer'))
});

app.get('/isLoggedIn', function(req, res){
  res.json(req.user);
});


// middleware to ensure user authentication
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.send({})
}
// -------


var ideas = require('./routes/api');

app.use('/', express.static(path.join(__dirname, 'dist')));
app.use('/api', ideas);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  console.log(err)

  // render the error page
  res.status(err.status || 500);
  res.redirect('/')
 //res.render('error');
});

module.exports = app;