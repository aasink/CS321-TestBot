const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json'); 


const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent
    ] });                                                           // get intent permissions

server_id = '1154143912928235560'    // server id 
channel_id = '1154143913397977091'    // general channel id

client.once('ready', async c => {                                    // print log on message in channel
    console.log(`Ready! Logged in as ${c.user.tag}`);
    const channel = await client.channels.fetch(channel_id);
    channel.send('Bot is ready!');
  });

client.on('ready', async () => {
    const channel = await client.channels.cache.get('1154143913397977091');          // print message in the channel
    channel.send('Hello, World!');
  });

client.on('ready', async () => {
    const user = await client.users.fetch('431803299038232577');               // print message to user messages
    user.send('Hello, World!');
  });
  
client.on('ready', async () => {
    const guild = await client.guilds.cache.get(server_id);                     // print usernames in channel
    const members = await guild.members.fetch();

    members.each(member => console.log(member.user.username));           // print to console.

    let usernames = [];
    members.each(member => usernames.push(member.user.username));            // put in list then print to console
    console.log(usernames);
});

client.on('messageCreate', (message) => {                                  // bot logoff
    if (message.content === '!logout') {
      message.channel.send('CS321 Test Bot Logged Out.')
      client.user.setStatus('offline')
      client.destroy();
    }
  });

client.login(token)



