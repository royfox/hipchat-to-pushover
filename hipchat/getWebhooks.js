var Hipchatter = require('hipchatter');
var config = require('../config');
var hipchatter = new Hipchatter(config.hipChatApiKey);

hipchatter.webhooks(config.hipChatRoom, function(err, hooks){
    console.log(hooks);
});