/*
Bewertungen
*/
const readline = require('readline');
var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
var fs = require('fs');
var chalk = require('chalk');
var bewertungen = [];

/* GET Bewertungen listing. */
router.get('/', function (req, res, next) {
    res.send("Zeige alle Bewertungen");
    fs.readFile(__dirname + "/Json/bewertungen.json", "utf-8", function (err, data) {
        
        var content = JSON.parse(data);
        
        for(i=0; i<content.bewertungen.length;i++)
            {
                console.log("Name: " +chalk.red(content.bewertungen[i].name));
                console.log("Fakultät: " +chalk.cyan(content.bewertungen[i].fakultaet));
                console.log("Studiengänge: " +chalk.red(content.bewertungen[i].studiengaenge));
                console.log("Module: " +chalk.red(content.bewertungen[i].module));
                console.log("Raum: " +chalk.red(content.bewertungen[i].raum));
                console.log("ID: " +chalk.red(content.bewertungen[i].id));
                console.log("Stelle: " +chalk.green(content.bewertungen[i].stelle));
                console.log("Kommentar: " +chalk.blue(content.bewertungen[i].kommentar));
                
            }
        

       
});
});

router.post('/', bodyParser.json(), function (req, res) {
    console.log(req.body);
    res.status(200).json({
        uri: req.protocol + "://" + req.headers.host + "/" + ressourceName + "/" + req.body.id
    });
});
/*router.get("/:professorId", function (req, res) {
    res.send("Repräsentation eines Professors mit der ID: " + req.params.professorId);
      fs.readFile(__dirname + "/Json/professoren.json", "utf-8", function (err, data) {
        
        var content = JSON.parse(data);
        
        for(i=0; i<content.professoren.length;i++)
            {
                if ( req.params.professorId == content.professoren[i].id)
                    {
                console.log("Name: " +chalk.red(content.professoren[i].name));
                console.log("Fakultät: " +chalk.cyan(content.professoren[i].fakultaet));
                console.log("Studiengänge: " +chalk.red(content.professoren[i].studiengaenge));
                console.log("Module: " +chalk.red(content.professoren[i].module));
                console.log("Raum: " +chalk.red(content.professoren[i].raum));
                console.log("ID: " +chalk.red(content.professoren[i].id));
                        break;
                    }
            
            }

       
});
    
});*/
/*router.get("/:professorName", function (req, res) {
    res.send("Repräsentation eines Professors mit der Name: " + req.params.professorName);
      fs.readFile(__dirname + "/Json/professoren.json", "utf-8", function (err, data) {
        
        var content = JSON.parse(data);
        
        for(i=0; i<content.professoren.length;i++)
            {
                if ( req.params.professorName == content.professoren[i].name)
                    {
                console.log("Name: " +chalk.red(content.professoren[i].name));
                console.log("Fakultät: " +chalk.cyan(content.professoren[i].fakultaet));
                console.log("Studiengänge: " +chalk.red(content.professoren[i].studiengaenge));
                console.log("Module: " +chalk.red(content.professoren[i].module));
                console.log("Raum: " +chalk.red(content.professoren[i].raum));
                console.log("ID: " +chalk.red(content.professoren[i].id));
                        break;
                    }
            
            }

       
});
    
});*/



module.exports = router;
