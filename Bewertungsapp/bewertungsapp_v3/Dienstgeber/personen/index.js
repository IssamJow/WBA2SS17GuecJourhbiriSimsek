/*
index für Personen
*/
var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const ressourceName = "personen";

router.get('/', function (req, res) {
    res.format({
        'application/json': function () {
            const data = require('./Json/personen.json');
            res.send(data);
        }
    });
});
router.post('/', bodyParser.json(), function (req, res) {
    console.log(req.body);
    res.status(200).json( {uri: req.protocol+"://" + req.headers.host + "/"+ressourceName+"/"+req.body.id});
});
router.get("/:personId", function (req, res) {
    res.send("Repräsentation eines person mit der ID: " + req.params.personId);
});

module.exports = router;
