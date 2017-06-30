const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');

const ressourceName = "users";

router.use(function timeLog(req, res, next) {
    console.log("User Route Time Log", Date.now());
    next();
});

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.send('index', { title: 'Bewertungsapp' });
});*/
router.get('/', function (req, res) {
    res.send("Repräsentation aller User");
});

router.post('/', bodyParser.json(), function (req, res) {
    console.log(req.body);
    res.status(200).json( {uri: req.protocol+"://" + req.headers.host + "/"+ressourceName+"/"+req.body.id});
});
router.get("/:userId", function (req, res) {
    res.send("Repräsentation eines User mit der ID: " + req.params.userId);
});


module.exports = router;
