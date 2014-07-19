var Hipchatter = require('hipchatter');
var config = require('../config');
var hipchatter = new Hipchatter(config.hipChatApiKey);

hipchatter.create_webhook(config.hipChatRoom, { url: config.publicUri + ":3000/" + config.webhookKey, event: 'room_message' }, function(err){
	if (err == null) {
		console.log('Successfully created webhook.');
	} else {
		console.log("Error", err);
	}
});