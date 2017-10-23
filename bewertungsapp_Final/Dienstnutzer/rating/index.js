/*
index für Ratings
*/
var express = require('express');
var router = express.Router();
var fs = require('fs');
const bodyParser = require('body-parser');



var _jsonFile = __dirname + '/Json/ratings.json';




function getRatingFromData() {
    //fs readfile
    var content = fs.readFileSync(_jsonFile).toString();
  
    var tempContent = content.substr(0, content.length -1);
    var contentObjekt = "[" + tempContent + "]";
    //  console.log(tempContent);
    return JSON.parse(contentObjekt);
}



function checkIfExist(newRating, ratingList) {
    var temp = false;

    for (var i = 0; i < ratingList.length; i++) {
        if (ratingList[i].id == newRating.id) {
            temp = true;
            break;
        }

    }
    return temp;
}

function updateFile(ratingList) {
    fs.truncate(_jsonFile, 0, function (err) {
        for (var i = 0; i < ratingList.length; i++) {
            var line = JSON.stringify(ratingList[i]) + ",";
            fs.appendFile(_jsonFile, line, function (err) {});
        }

    });
}



function checkId(ratingId, ratingList) {
    var temp = false;

    for (var i = 0; i < ratingList.length; i++) {
        if (ratingList[i].id == ratingId) {
            temp = true;
            break;
        }

    }
    return temp;
}

router.get('/bestof', function(req,res){
    var ratingList = getRatingFromData();
    var temp = ratingList[0].rating; 
    var id = 0;
    for(var i =0 ; i< ratingList.length; i++)
        { 
            if( ratingList[i].rating > temp)
            {
                id = ratingList[i];
            }
        }
    
    res.send(id);   
    
    
});
router.get('/worstof', function(req,res){
    var ratingList = getRatingFromData();
    var temp2 = ratingList[0].rating; 
    var id2 = 0;
    for(var i =0 ; i< ratingList.length; i++)
        { 
            if( ratingList[i].rating <= temp2)
            {
                id2 = ratingList[i];
            }
        }
    
    res.send(id2);   
    
    
});
//kann noch sauberer geschrieben werden

router.get('/latest', function(req,res){
    var ratingList = getRatingFromData();
    var temp = ratingList.length;
    
    res.send(ratingList[temp-1]);
    
   
});


router.get('/', function (req, res) {
    var ratingList = getRatingFromData();
    res.send(ratingList);
});
router.get('/:id', function(req, res) {
    var ratingId = req.params.id;
    var ratingList = getRatingFromData();
    var check = checkId(ratingId, ratingList);
    
    if( check == false){
      res.status(404).send("Rating mit der id " + ratingId + " ist nicht vorhanden");
    }
    else 
        {
            for(var i = 0; i< ratingList.length;i++){
                if(ratingList[i].id == ratingId)
                    {
                        res.send(ratingList[i]);
                    }
                
            }
        }
});
router.post('/', bodyParser.json(), function (req, res) {
    var newRating = req.body;
    var ratingList = getRatingFromData();
    var check = checkIfExist(newRating, ratingList);
    if (check == true) {
        res.send("Rating schon vorhanden");
    } else {
        var line = JSON.stringify(newRating) + ",";
        fs.appendFile(_jsonFile, line, function (err) {
            res.status(201).send("Rating erfolgreich erstellt.");
        });
    }

});
router.put('/:id', bodyParser.json(), function (req, res) {
    var rating = req.body;
    rating.id = req.params.id;
    var ratingList = getRatingFromData();
    var check = checkIfExist(rating, ratingList);
    if (check == false) {
        res.send("Rating mit der id " + rating.id + " ist nicht vorhanden");
    } else {
        for (var i = 0; i < ratingList.length; i++) {
            if (ratingList[i].id == rating.id) {
                ratingList[i] = rating;
                updateFile(ratingList);
                res.send("Rating mit der ID " + ratingList[i].id + " wurde ersetzt");
                break;
            }

        }
    }

});
router.delete('/:id', function (req, res) {
    var ratingId = req.params.id;
    var ratingList = getRatingFromData();
    var check = checkId(ratingId, ratingList);
    if (check == false) {
        res.send("Rating mit der id " + ratingId + " ist nicht vorhanden");
    } else {
        for (var i = 0; i < ratingList.length; i++) {
            if (ratingList[i].id == ratingId) {
                ratingList.splice(i, 1);
                updateFile(ratingList);
                res.send("Rating mit der ID " + ratingId + " wurde erfolgreich gelöscht");
                break;
            }
        }
    }
});


module.exports = router;
