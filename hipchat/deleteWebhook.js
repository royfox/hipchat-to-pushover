var Hipchatter = require('hipchatter');
var config = require('../config');
var hipchatter = new Hipchatter(config.hipChatApiKey);

var webhookId = process.argv[2];

hipchatter.delete_webhook(config.hipChatRoom, webhookId, function(err){
	if (err == null) console.log('Webhook sucessfully deleted');
});
