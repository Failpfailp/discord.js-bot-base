module.exports =function(client,config){
  const logging = require('./other.js');
  const commands=require("./command.js");
  const ready=require("./ready.js");
  const serverjoin=require("./serverjoin.js");
  //const userjoin=require("./userjoin.js");
  //---running---//
  logging(client,config.dev_mode);
  ready(client,config)
  commands(client,config)
  serverjoin(client)
  //userjoin(client)
}
