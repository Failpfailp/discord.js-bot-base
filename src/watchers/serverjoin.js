module.exports=function(client){
	const {RichEmbed} = require('discord.js');
	client.on("guildCreate",(guild) => {
		const embed = new RichEmbed()
		.setColor("#88ff59")
		.setAuthor(guild.name,guild.iconURL)
		.setTitle("I have joined a new server!")
		.addField("**__Info:__**",`Name: ${guild.name}\nOwner: ${guild.owner}\nAge: ${guild.createdAt}\nMembers: ${guild.memberCount}\nBots:`)
		.setFooter(`ID: ${guild.id}`)
		client.channels.get("YOR_LOG_CHANNEL_HERE").send(embed)
	});
}
