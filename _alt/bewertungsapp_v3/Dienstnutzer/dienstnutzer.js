var express = require('express');
var async = require('async');
var bodyParser = require('body-parser');
var fs = require('fs');



var app = express();
var settings = {
    port: 3001
};


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