 var http = require('http'),
    faye = require('faye');


//Server
var server = http.createServer();

//Node Adapter
var fayeservice = new faye.NodeAdapter( {
    mount: '/faye',
    timeout: 50

});

fayeservice.attach(server);