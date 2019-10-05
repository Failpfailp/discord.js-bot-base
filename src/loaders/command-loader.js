module.exports=function (client) {
  const Discord = require('discord.js');
  client.commands = new Discord.Collection();
  const fs = require('fs');
  const commandFiles = {
     folder_name:  fs.readdirSync('./src/commands/folder_name').filter(file => file.endsWith('.js'))
  }
  //--adding commands--//
  for (const key of keys) {
   let commands = commandFiles[key];

   for (const commandName of commands) {
      let command = require(`../commands/${key}/${commandName}`);
      client.commands.set(command.name, command);
   }
  }
}
