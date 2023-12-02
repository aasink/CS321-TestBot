// index.js
const client = require('./bot.js'); // Require the bot.js file and get the client object

console.log("over here");

/*  Listen for the ready event when heard execute the ready event file */
client.on('ready', () => {
  client.events.get('ready').execute(client);
});

/*  Listen for the messageCreate event when heard execute the message event file */
client.on('messageCreate', message => {
  client.events.get('message').execute(client, message);
});

/*  Listen for the sendDm event when heard execute the dm event file  */
client.on('sendDm', (msg_tosend, userid) => {
  client.events.get('dm').execute(client, msg_tosend, userid);
});

/*  Listen for the createChannel event when heard execute the channel event file */
client.on('createChannel', (channel_name, channel_type, action) => {
  client.events.get('channel').execute(client, channel_name, channel_type, action);
});

setTimeout(function() {
  //console.log("hello here");

  client.emit('sendDm', "Hello 1", '431803299038232577');   // for sending message to user
}, 20000);
