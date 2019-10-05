module.exports =function (client,config) {
  const Discord = require('discord.js');
  const cooldowns = new Discord.Collection();
  //--command handling--//
  client.on('message', message => {
  	if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  	const args = message.content.slice(config.prefix.length).split(/ +/);
  	const commandName = args.shift().toLowerCase();
  	const command = client.commands.get(commandName)
  		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

  	if (!command) return;
  	// channel stuff //
  	if (command.guildOnly && message.channel.type !== 'text') {
  		return message.reply('I can\'t execute that command inside DMs!');
  	}
  	// developer command //
  	if (command.developer && message.author.id!=config.owner_id) {
  		return;
  	}
  	// disabled command //
    if(message.author.id!=config.owner_id){
      if (command.disabled) {
          let reply =`\n\`${command.name}\` has been disabled!`
          if (command.reason) {
              reply +=`\nReason: \`${command.reason}\``
          }
          message.reply(reply).then((msg)=>{
              msg.delete(7500)
          })
          return;
      }
    }
  	// nsfw //
    if (!config.dev_mode) {
      if (command.nsfw && !message.channel.nsfw) {
    		message.reply(`\`${command.name}\` needs to be used in a NSFW channel!`).then((msg)=>{
    			msg.delete(7500)
    		})
    		return;
    	}
    }

  	// dbl //
  	if (command.dbl && message.author.id!=config.owner_id) {
  		dbl.hasVoted(message.author.id).then(voted => {
  			if (!voted){
  				message.reply(`Sorry but you need to vote for me on discordbots.org to use: \`${command.name}\`\nhttps://discordbots.org/bot/_YOUR_BOT_ID_HERE/vote`)
  				return ;
  			}
  		});
  	}
    // args //
    if (command.args) {
      if (args[0]==null) {
            let reply = `You didn't provide any arguments, ${message.author}!`;
      		  if (command.usage) {
      			   reply += `\nThe proper usage would be: \`${config.prefix}${command.name} ${command.usage}\``;
      		  }
      		  return message.channel.send(reply);
        }else if (command.argsnum!=0 && (args.length!=command.argsnum)) {

        }
  	}
  	// cooldown //
  	if (!cooldowns.has(command.name)) {
  		cooldowns.set(command.name, new Discord.Collection());
  	}

  	const now = Date.now();
  	const timestamps = cooldowns.get(command.name);
  	const cooldownAmount = (command.cooldown || 3) * 1000;

  	if (timestamps.has(message.author.id)) {
  		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

  		if (now < expirationTime) {
  			const timeLeft = (expirationTime - now) / 1000;
  			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
  		}
  	}

  	timestamps.set(message.author.id, now);
  	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

  	try {
  		command.execute(message, args,client);
  	} catch (error) {
  		console.error(error);
  		message.reply('this shouldn\'t have happened');
      if (message.author.id==config.owner_id) {
        message.author.send(error)
      }
  	}
  });
};
