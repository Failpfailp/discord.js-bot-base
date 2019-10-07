module.exports=function (client,config) {
  //dbl//
  var DBL = require("dblapi.js");
  var dbl = new DBL(config.dbl_token, client);
  const {RichEmbed} = require('discord.js');
  client.once('ready', () => {
    client.user.setPresence({ game: { name: 'Made by flammableassassin',type:"WATCHING"}})
    if (!config.dev_mode) {
      setInterval(() => {
          dbl.postStats(client.guilds.size);
      }, 1800000);
      const embed = new RichEmbed()
      .setTitle("Bot Started Up!")
      .setDescription("Guild count: "+client.guilds.size+"\nUser count: "+client.users.size+"\nChannel count: "+client.channels.size+"\nDev Mode: "+config.dev_mode)
      .setTimestamp()
      .setColor("88ff59")
      client.channels.get("YOUR_LOG_CHANNEL_HERE").send(embed)
    }
  });
}
