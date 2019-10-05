module.exports=function (client) {
  const Discord = require('discord.js');
  client.commands = new Discord.Collection();
  const fs = require('fs');
  const commandFiles = {
     folder_name:  fs.readdirSync('./src/commands/folder_name').filter(file => file.endsWith('.js'))
  }
  //--adding commands--//
  var keys = Object.keys(commandFiles)
  for (var i = 0; i < keys.length; i++) {
    var commands=commandFiles[keys[i]]
    for (var l = 0; l < commands.length; l++) {
      const command = require(`../commands/${keys[i]}/${commands[l]}`);
      client.commands.set(command.name, command);
    }
  }
}
