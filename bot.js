const fs = require('fs');
const {loaders,watchers,config} = require('./src/index.js');
const Discord = require('discord.js');
//getting token//
if (config.dev_mode) var token = config.token.dev;
else var token = config.token.main;
//runing bot//
console.log(`Dev Mode: ${config.dev_mode}`);
const client = new Discord.Client();
loaders(client,config);
watchers(client,config);
//if dev mode is disabled//
if (!config.dev_mode) {
  //chewey stuff//
  var cheweyBotAnalyticsAPI=require("discord-bot-analytics")
  var customAnalytics = new cheweyBotAnalyticsAPI(config.chewey_token,client)
  //express//
  var express = require('express');
  var app = express();
  app.get("/", (request, response) => {
    console.log(Date.now() + " Ping Received");
    response.sendStatus(200).end();
  });
  app.listen(process.env.PORT);
}
//----------------//
client.login(token);
