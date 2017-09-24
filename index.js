'use strict';

var SlackBot = require('slackbots');

// create a bot
var bot = new SlackBot({
    token: process.env.SLACK_TOKEN, // Add a bot https://my.slack.com/services/new/bot and put the token
    name: 'makibot'
});

bot.on('start', function() {
  console.log("TEST");
});
