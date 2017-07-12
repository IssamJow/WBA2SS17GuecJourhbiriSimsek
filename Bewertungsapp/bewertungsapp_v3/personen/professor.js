/*
Professoren
*/
var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
var fs = require('fs');
var professoren = [];

/* GET Professors listing. */
router.get('/', function (req, res, next) {
            res.send("Zeige alle Professoren");
            fs.readFile(__dirname + "/professoren.json", "utf-8", function (err, data) {
                var content = JSON.parse(data);


                for (var text in content) {
                    var obj = content[text];

                    for (var text2 in obj) {
                        var x = {
                            "Name": obj[text2].name,
                            "Fakultaet": obj[text2].fakultaet,
                            "Studiengaenge": obj[text2].studiengaenge,
                            "Module": obj[text2].module,
                            "Raum": obj[text2].raum
                        };
                        professoren.push(x);
                    }
                }
                console.log(professoren);
                
            });
    
            });

            router.post('/', bodyParser.json(), function (req, res) {
                console.log(req.body);
                res.status(200).json({
                    uri: req.protocol + "://" + req.headers.host + "/" + ressourceName + "/" + req.body.id
                });
            });
            router.get("/:professorId", function (req, res) {
                res.send("Repräsentation eines Professors mit der ID: " + req.params.professorId);
            });


            module.exports = router;
