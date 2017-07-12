var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Melde dich an', success: false, errors: req.session.errors });
    req.sesion.errors=null;
});

router.post('/submit', function(req,res,next){
    //Check validity
});
module.exports = router;
