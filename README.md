###Installation:

- Run `npm install`
- Make a copy of config.default.js called config.js, and fill in all the variables.
- If needed, use the webhook scripts explained below to create your webhooks
- Start the server `node server.js`

### Managing webhooks

In the hipchat directory there are a few simple scripts for managing the webhooks. `createWebhook.js` will add a HipChat webhook based on the details specified in your config file. `getWebhooks.js` will just fetch and display the details of all existing webhooks. `deleteWebhook.js` will remove a webhook (it takes the id as a command line argument, for example `node deleteWebhook.js 123`)

###Testing

For testing the hook locally, you can run the testPost.js script, which will post a dummy set of data to your server. 

