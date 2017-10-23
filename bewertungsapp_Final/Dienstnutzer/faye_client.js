 var faye = require('faye');

var client = new faye.Client('http://localhost:3001/faye');

client.subscribe(' /news', function(message) {
    console.log ('Nachricht erhalten: ' +  message.text);
});

    
client.publish('/news', {
    text: 'HEllo World'
});