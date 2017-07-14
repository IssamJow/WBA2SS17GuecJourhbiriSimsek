/*
Wissenschaftlicher Mitarbeitern
*/
var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
var fs = require('fs');
var chalk = require('chalk');
var wiss_Mit = [];

/* GET wiss_Mitarbeiter listing. */
router.get('/', function (req, res, next) {
    res.send("Zeige alle wissenschaflicher Mitarbeitern");
     fs.readFile(__dirname + "/Json/wiss_Mit.json", "utf-8", function (err, data) {
        
        var content = JSON.parse(data);
        
        for(i=0; i<content.wiss_Mit.length;i++)
            {
                
                console.log("Name: " +chalk.red(content.wiss_Mit[i].name));
                console.log("Fakultät: " +chalk.cyan(content.wiss_Mit[i].fakultaet));
                console.log("Studiengänge: " +chalk.red(content.wiss_Mit[i].studiengaenge));
                console.log("Module: " +chalk.red(content.wiss_Mit[i].module));
                console.log("Raum: " +chalk.red(content.wiss_Mit[i].raum));
                console.log("ID: " +chalk.red(content.wiss_Mit[i].id));
            }

       
});
});

router.post('/', bodyParser.json(), function (req, res) {
    console.log(req.body);
    res.status(200).json( {uri: req.protocol+"://" + req.headers.host + "/"+ressourceName+"/"+req.body.id});
});
router.get("/:wissId", function (req, res) {
    res.send("Repräsentation eines wissenschaftlicher Mitarbeiter mit der ID: " + req.params.wissId);
    fs.readFile(__dirname + "/Json/wiss_Mit.json", "utf-8", function (err, data) {
        
        var content = JSON.parse(data);
        
        for(i=0; i<content.wiss_Mit.length;i++)
            {
                if ( req.params.wissId == content.wiss_Mit[i].id)
                    {
                console.log("Name: " +chalk.red(content.wiss_Mit[i].name));
                console.log("Fakultät: " +chalk.cyan(content.wiss_Mit[i].fakultaet));
                console.log("Studiengänge: " +chalk.red(content.wiss_Mit[i].studiengaenge));
                console.log("Module: " +chalk.red(content.wiss_Mit[i].module));
                console.log("Raum: " +chalk.red(content.wiss_Mit[i].raum));
                console.log("ID: " +chalk.red(content.wiss_Mit[i].id));
                        break;
                    }
            
            }

       
});
});


module.exports = router;
