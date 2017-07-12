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
            fs.readFile(__dirname + "/Json/professoren.json", "utf-8", function (err, data) {
               
              if (err) throw err;
                console.log(data)
                
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
