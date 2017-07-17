var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send("Zeige alle User");
});

router.post('/', bodyParser.json(), function (req, res) {
    console.log(req.body);
    res.status(200).json( {uri: req.protocol+"://" + req.headers.host + "/"+ressourceName+"/"+req.body.id});
});
router.get("/:userId", function (req, res) {
    res.send("Repräsentation eines User mit der ID: " + req.params.userId);
});


module.exports = router;
