/*
index für Personen
*/
var express = require('express');
var router = express.Router();
var fs = require('fs');
const bodyParser = require('body-parser');
const ressourceName = "personen";


var _jsonFile = __dirname + '/Json/personen.json';

function getPersonFromData() {
    //fs readfile
    var content = fs.readFileSync(_jsonFile).toString();
    console.log(content);
    var tempContent = content.substr(0, content.length - 1);
    var contentObjekt = "[" + tempContent + "]";
    return JSON.parse(contentObjekt);
}

function checkIfExist(newPerson, personenList) {
    var temp = false;

    for (var i = 0; i < personenList.length; i++) {
        if (personenList[i].id == newPerson.id) {
            temp = true;
            break;
        }

    }
    return temp;
}

function updateFile(personenList) {
    fs.truncate(_jsonFile, 0, function (err) {
        for (var i = 0; i < personenList.length; i++) {
            var line = JSON.stringify(personenList[i]) + ",";
            fs.appendFile(_jsonFile, line, function (err) {});
        }

    });
}



function checkId(personId, personenList) {
    var temp = false;

    for (var i = 0; i < personenList.length; i++) {
        if (personenList[i].id == personId) {
            temp = true;
            break;
        }

    }
    return temp;
}
router.get('/', function (req, res) {
    var personList = getPersonFromData();
    res.send(personList);
});
router.get('/:id', function(req, res) {
    var personId = req.params.id;
    var personList = getPersonFromData();
    var check = checkId(personId, personList);
    
    if( check == false){
      res.send("Person mit der id " + personId + " ist nicht vorhanden");
    }
    else 
        {
            for(var i = 0; i< personList.length;i++){
                if(personList[i].id == personId)
                    {
                        res.send(personList[i]);
                    }
                
            }
        }
});
router.post('/', bodyParser.json(), function (req, res) {
    var newPerson = req.body;
    var personenList = getPersonFromData();
    var check = checkIfExist(newPerson, personenList);
    if (check == true) {
        res.send("Person schon vorhanden");
    } else {
        var line = JSON.stringify(newPerson) + ",";
        fs.appendFile(_jsonFile, line, function (err) {
            res.status(201).send("Person erfolgreich erstellt.");
        });
    }

});
router.put('/:id', bodyParser.json(), function (req, res) {
    var person = req.body;
    person.id = req.params.id;
    var personList = getPersonFromData();
    var check = checkIfExist(person, personList);
    if (check == false) {
        res.send("Person mit der id " + person.id + " ist nicht vorhanden");
    } else {
        for (var i = 0; i < personList.length; i++) {
            if (personList[i].id == person.id) {
                personList[i] = person;
                updateFile(personList);
                res.send("Person mit der ID " + personList[i].id + " wurde ersetzt");
                break;
            }

        }
    }

});
router.delete('/:id', function (req, res) {
    var personId = req.params.id;
    var personList = getPersonFromData();
    var check = checkId(personId, personList);
    if (check == false) {
        res.send("Person mit der id " + personId + " ist nicht vorhanden");
    } else {
        for (var i = 0; i < personList.length; i++) {
            if (personList[i].id == personId) {
                personList.splice(i, 1);
                updateFile(personList);
                res.send("Person mit der ID " + personId + " wurde erfolgreich gelöscht");
                break;
            }
        }
    }
});

module.exports = router;
