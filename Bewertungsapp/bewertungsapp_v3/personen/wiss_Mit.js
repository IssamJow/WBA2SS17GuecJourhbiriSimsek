/*
Wissenschaftlicher Mitarbeitern
*/
var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

/* GET wiss_Mitarbeiter listing. */
router.get('/', function (req, res, next) {
    res.send("Zeige alle wissenschaflicher Mitarbeitern");
});

router.post('/', bodyParser.json(), function (req, res) {
    console.log(req.body);
    res.status(200).json( {uri: req.protocol+"://" + req.headers.host + "/"+ressourceName+"/"+req.body.id});
});
router.get("/:wissId", function (req, res) {
    res.send("Repräsentation eines wissenschaftlicher Mitarbeiter mit der ID: " + req.params.wissId);
});


module.exports = router;
