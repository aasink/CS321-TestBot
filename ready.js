// events/ready.js
const { channel_id } = require('../config.json');

module.exports = {
    name: 'ready',                  // print login message in console and channel
    async execute(client) {                 
        console.log(`Logged in as ${client.user.tag}!`);

        try {
          const channel = await client.channels.fetch(channel_id); 
          channel.send('Bot is ready!'); // Send a message to the channel
        } 
        catch (error) {
          console.error(error); // Log the error to the console
        }
      }
    };
  