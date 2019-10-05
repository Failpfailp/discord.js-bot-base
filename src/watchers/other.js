module.exports=function (client,dev_mode) {
  if (dev_mode) {
    client.on("error", (e) => console.error(e));
    client.on("warn", (e) => console.warn(e));
    client.on("debug", (e) => console.info(e));
  }
  process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));
}
