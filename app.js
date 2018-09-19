/**
 * Module dependencies.
 */
var express = require('express');
var compress = require('compression');
var session = require('express-session');
var bodyParser = require('body-parser');
var logger = require('morgan');
var errorHandler = require('errorhandler');
var dotenv = require('dotenv');

var path = require('path');
var expressValidator = require('express-validator');
var multer = require('multer');
var upload = multer({ dest: path.join(__dirname, 'uploads') });
var exphbs = require('express3-handlebars');
var fs = require('fs');
var _ = require('underscore');

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 *
 * Default path: .env (You can remove the path argument entirely, after renaming `.env.example` to `.env`)
 */
dotenv.load({ path: '.env' });


var http = require('http');
var express = require('express'),
   app = module.exports.app = express(),
   server = http.createServer(app),
   io = require('socket.io').listen(server);
server.listen(7000);

/**
 * Express configuration.
 */
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static("public"));
app.use(compress());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

// app.use(function(req, res, next) {
//   res.locals.user = req.user;
//   next();
// });
// app.use(function(req, res, next) {
//   // After successful login, redirect back to /api, /contact or /
//   if (/(api)|(contact)|(^\/$)/i.test(req.path)) {
//     req.session.returnTo = '/';
//   }
//   next();
// });
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));

var needsUsername = function(username) {
  return function(req, res, next) {
    if (req.user.username === username) {
      next();
    } else {
      res.status(401).send('Unauthorized');
    }
  };
};

/**
 * Primary app routes.
 */
app.get('/', function(req,res){
  res.render('home');
})



/**
 * Error Handler.
 */
app.use(errorHandler());

/*
* Socket IO for future use
*/
io.on('connection', function (socket) {


});


app.listen(app.get('port'), function() {
  console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
});

module.exports = app;
