const express = require("express");
const bodyParser = require("body-parser");
const fs = require ("fs");

global.data = require("./data");

var app = express();

const settings = {
    port: 3000,
    datafile: "./testdata.json"    
};
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.send(err.status + ' ' + err.messages);
});
app.use(function (req, res, next) {
    console.log('Time: %d ' + ' Request-Pfad: ' + req.path, Date.now());
    next();
}); 

//Routing

//binden des Pfades an eine Konstante
const user = require('./user');
// mounten des Routers für "user" an die main App
app.use("/user", user);
//To-DO: das Selbe was hier vorkommt, für Professoren usw noch machen 
// Dozenten fragen: ob wir Json datein zum Speichern von Professoren, wiss_Mitarbeiter und tutoren erstellen müssen 
//und das mit FS module bearbeiten?
// Get Request auf pfad "/"
app.get("/", function(req,res) {
    res.send("Get Hello Darling!");
});
app.post("/", function (req,res) {
    res.send("POST")
});
app.put("/user", function (req, res){
        res.send("PUT /user")
        })
app.delete('/user', function (req, res) {
    res.send("DELETE /user")
})

app.listen(settings.port, function(){
    console.log("Express App läuft auf Port " + settings.port);
});