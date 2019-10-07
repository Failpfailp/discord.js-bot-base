module.exports = {
  config: {
    prefix:"PREFIX_GOES_HERE",
    owner_id:"ID_GOES_HERE",
    dbl_token:"TOKENS_GOES_HERE",
    chewey_token:"TOKENS_GOES_HERE",
    dev_mode :true,
    token:{
      main:"TOKENS_GOES_HERE",
      dev:"TOKENS_GOES_HERE",
    }
  },
  watchers: require('./watchers/index.js'),
  loaders: require('./loaders/index.js')
}
