/*
Tutoren
*/
var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
var fs = require('fs');
var chalk = require('chalk');
var tutoren = [];

/* GET Tutoren listing. */
router.get('/', function (req, res, next) {
    res.send("Zeige alle Tutoren");
    fs.readFile(__dirname + "/Json/tutoren.json", "utf-8", function (err, data) {
        
        var content = JSON.parse(data);
        
        for(i=0; i<content.tutoren.length;i++)
            {
                console.log("Name: " +chalk.red(content.tutoren[i].name));
                console.log("Fakultät: " +chalk.cyan(content.tutoren[i].fakultaet));
                console.log("Studiengänge: " +chalk.red(content.tutoren[i].studiengaenge));
                console.log("Module: " +chalk.red(content.tutoren[i].module));
                console.log("Raum: " +chalk.red(content.tutoren[i].raum));
                console.log("ID: " +chalk.red(content.tutoren[i].id));
            }

       
});
});

router.post('/', bodyParser.json(), function (req, res) {
    console.log(req.body);
    res.status(200).json( {uri: req.protocol+"://" + req.headers.host + "/"+ressourceName+"/"+req.body.id});
});
router.get("/:tutorenId", function (req, res) {
    res.send("Repräsentation eines Tutors mit der ID: " + req.params.tutorenId);
    
fs.readFile(__dirname + "/Json/tutoren.json", "utf-8", function (err, data) {
        
        var content = JSON.parse(data);
        
        for(i=0; i<content.tutoren.length;i++)
            {
                if ( req.params.tutorenId == content.tutoren[i].id)
                    {
                console.log("Name: " +chalk.green(content.tutoren[i].name));
                console.log("Fakultät: " +chalk.cyan(content.tutoren[i].fakultaet));
                console.log("Studiengänge: " +chalk.red(content.tutoren[i].studiengaenge));
                console.log("Module: " +chalk.green(content.tutoren[i].module));
                console.log("Raum: " +chalk.red(content.tutoren[i].raum));
                console.log("ID: " +chalk.red(content.tutoren[i].id));
                        break;
                    }
            
            }

       
});
});


module.exports = router;
