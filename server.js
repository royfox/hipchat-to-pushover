var express = require('express');
var app = express();
var config = require('./config');
var Pushover = require('node-pushover');

app.use(express.bodyParser());

app.post('/' + config.webhookKey, function(request, response) {
    try {
    	handle(request.body);
    } catch(e) {
    	console.log("Error: ", err);
    }
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});

function handle(params) {
	if(params.event != 'room_message'){
		console.log("Invaild message type: " + params.event);
		return;
	}
	var username = params.item.message.from.name;
	var message = params.item.message.message;
	var room = params.item.room.name;
	var title = username + " posted in " + room;
	var push = new Pushover({
	    token: config.pushoverToken,
	    user: config.pushoverUser
	});
	console.log("Sending message: " + title + " - " + message);
	push.send(title, message, function (err, res){
	    if(err) {
	        console.log("Error!", err);
	    } else {
	        console.log("Message sent successfully");
	    }
	});
}