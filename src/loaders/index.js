module.exports=function (client,config) {
  const commands = require('./command-loader.js');
  const events = require('./event-loader.js');
  commands(client)
  events(client)
}
