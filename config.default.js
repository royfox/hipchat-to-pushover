module.exports = {
	//Used to obfuscate your webhook URL. If your key is xxxxxx and your server is 1.1.1.1:3000, the webhook URL is 1.1.1.1:3000/xxxxxx
	webhookKey above appended: "", 
	
    pushoverToken: "",
    pushoverUser: "",
	
	//These are only needed if you want to use the included scripts to manage your HipChat webhooks
	hipChatApiKey: "",
	hipChatRoom: "", //Room name (string) or id (int)
	
	//The public URI of the server. The URL of the webhook will be this with the webhookKey above appended
	publicUri: "" 
}
