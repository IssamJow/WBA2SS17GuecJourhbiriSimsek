var express = require('express');
var async = require('async');
var bodyParser = require('body-parser');
var fs = require('fs');



var app = express();
var settings = {
    port: process.env.PORT || 3000
    
};



const personen = require('./personen/index');
app.use("/personen", personen);



app.listen(settings.port, function(){
    console.log("Dienstgeber ist nun auf Port " +settings.port+ " verfügbar.");
});

app.get('/', function(req, res){
    res.send('Hello There');
    
}); 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
