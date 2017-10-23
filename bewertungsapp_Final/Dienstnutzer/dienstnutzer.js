var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');




var app = express();
var settings = {
    port: 3001
};

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


const ratings = require('./rating/index');
app.use("/rating", ratings);



app.listen(settings.port, function(){
    console.log("Dienstnutzer ist nun auf Port " +settings.port+ " verfügbar.");
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
