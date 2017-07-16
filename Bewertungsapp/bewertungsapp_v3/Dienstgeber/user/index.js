var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

const ressourceName = "users";

router.get('/', function (req, res){
    res.send("Zeigt alle User");
});
router.post('/', bodyParser.json(), function (req, res) {
    console.log(req.body);
    res.status(200).json( {uri: req.protocol+"://" + req.headers.host + "/"+ressourceName+"/"+req.body.id});
});


module.exports = router;