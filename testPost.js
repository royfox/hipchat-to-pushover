/**
	A test script you can use to debug your webhook: 
    it just posts a fake data payload to your webhook server
**/

var request = require('request');
var config = require('./config');

var postData = {
  "event": "room_message",
  "item": {
    "message": {
      "date": "2014-07-19T07:55:28.888715+00:00",
      "from": {
        "id": 123456,
        "links": {
          "self": "https:\/\/api.hipchat.com\/v2\/user\/000000"
        },
        "mention_name": "TestName",
        "name": "Mr Test"
      },
      "id": "xxxxxxxxxxxxx",
      "mentions": [],
      "message": "this is the message that was entered in HipChat"
    },
    "room": {
      "id": 123456,
      "links": {
        "members": "https:\/\/api.hipchat.com\/v2\/room\/000000\/member",
        "self": "https:\/\/api.hipchat.com\/v2\/room\/000000",
        "webhooks": "https:\/\/api.hipchat.com\/v2\/room\/000000\/webhook"
      },
      "name": "Testing Room"
    }
  },
  "oauth_client_id": "xxxxxxx",
  "webhook_id": 123456
}

request.post(config.publicUri + ":3000/" + config.webhookKey, {form: postData});