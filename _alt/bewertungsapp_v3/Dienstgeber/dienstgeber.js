var express = require('express');
var async = require('async');
var bodyParser = require('body-parser');
var fs = require('fs');



var app = express();
var settings = {
    port: 3000
    
};



const personen = require('./personen/index');
app.use("/personen", personen);



app.listen(settings.port, function(){
    console.log("Dienstgeber ist nun auf Port " +settings.port+ " verfügbar.");
});

app.get('/', function(req, res){
    res.send('Hello Nutzer');
    
}); 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});





























/* 

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var expressSession = require('express-session');

var index = require('./bewertungsapp_v3/routes/index');
var users = require('./bewertungsapp_v3/routes/users');
var professor = require('./Dienstnutzer/personen/professor');
var tutor = require('./Dienstnutzer/personen/tutor');
var wiss_Mit = require('./Dienstnutzer/personen/wiss_Mit');
var bewerten = require('./Dienstgeber/bewerten/bewerten');

var app = express();



app.listen(3000, function () {
  console.log('Bewertungsapp listening on port 3000! Willkommen!');
});


// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSession({secret: 'max', saveUninitialized: false, resave:false}));


app.use('/', index);
app.use('/users', users);
app.use('/professor', professor);
app.use('/tutor', tutor);
app.use('/wiss_Mit', wiss_Mit);
app.use('/bewerten', bewerten);

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

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

*/
