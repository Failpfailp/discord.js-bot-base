module.exports = {
	name: 'name',//name of command (how it will be called)
	description: 'description',//description
	args: false,//if arguments are needed
	argsnum: 0,//if so how many
  usage:"<usage here>",//what the arguments are
	cooldown: 5,//cooldown
  aliases: ['aliases'],//other ways of calling the command
  disabled: false,//if it is disabled for bug and so on
  reason: "reason here!",//if so what is the reason if there isn't one just delete it
  developer: false,//developer only command
	nsfw: false,//if the command needs to be used in a NSFW channel
  dbl: false,//if the author needs to have voted on dbl
	execute(msg, args,client) {
  //--code goes here--//
	},
};
