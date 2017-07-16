var express = require('express'),
    http = require('http'),
    request = require('request');
var app = express();

var dHost = 'http://localhost';
var dPort = 3000;
var dURL = dHost + ':' + dPort;


// Get-Requests

app.get('users', function (req, res) {
    var url = dURL + '/users';

    //TODO : Get-Request implementieren
    request(url, function (err, response, body) {
        body = JSON.parse(body);
        res.json(body);

    });


});

// Get-Requests

app.get('/users/:userID', function (req, res) {

    var userID = req.params.userID;
    var url = dHost + ':' + dPort + '/users/' + userID;

    //TODO Get-Requests implementieren
    request.get(url, function (err, response, body) {
        body = JSON.parse(body);
        res.json(body);


    });


});

// POST

app.post('/users', function (req, res) {
    var userData = {
        "name": "",
        "fakultaet": 0,
        "studiengaenge": "",
        "email": "",
        "passwort": "",
        "id": 0

    };

    var url = dURL + '/users';

    //TODO Post-Request implementieren
    var options = {
        uri: url,
        method: 'POST',
        headers: {
            'Content-Type: application/json'
        },
        json: userData
    };

    request(options, function (err, response, body) {
        res.json(body);
    });

});

// Delete-Request

app.delete('/users/:id', function (req, res) {

    var id = req.params.id;
    var url = dURL + '/users/' + id;

    //TODO Delete-Request implementieren
    request.delete(url, function (err, response, body) {
        res.json(body);

    });

});

app.listen(8080, function () {
    console.log("Dienstnutzer ist nur auf Port 8080 verfuegbar");

});
