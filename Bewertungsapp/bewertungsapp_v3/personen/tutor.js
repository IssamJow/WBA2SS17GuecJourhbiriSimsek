/*
Tutoren
*/
var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

/* GET Tutoren listing. */
router.get('/', function (req, res, next) {
    res.send("Zeige alle Tutoren");
});

router.post('/', bodyParser.json(), function (req, res) {
    console.log(req.body);
    res.status(200).json( {uri: req.protocol+"://" + req.headers.host + "/"+ressourceName+"/"+req.body.id});
});
router.get("/:tutorenId", function (req, res) {
    res.send("Repräsentation eines Tutors mit der ID: " + req.params.tutorId);
});


module.exports = router;
