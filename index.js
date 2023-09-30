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
channel2_id = '1155233727048327329'

client.once('ready', async c => {                                    // print log on message in channel
    console.log(`Ready! Logged in as ${c.user.tag}`);
    const channel = await client.channels.fetch(channel_id);
    channel.send('Bot is ready!');
    await sendLobbyMessage('anuup');
  });

  /*
client.on('ready', async () => {
    const channel = await client.channels.cache.get(channel_id);          // print message in the channel
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
    let userid = [];
    members.each(member => usernames.push(member.user.username));            // put in list then print to console
    members.each(member => userid.push(member.user.id));
    console.log(usernames);
    console.log(userid);
});
*/

client.on('messageCreate', (message) => {                                  // bot logoff
    if (message.content === '!logout') {
      message.channel.send('CS321 Test Bot Logged Out.')
      client.user.setStatus('offline')
      console.log(`${client.user.tag} Logging Out.`);
      client.destroy();
    }
  });

const sendMessage = async (client, userId) => {                       // function to send message
    const user = await client.users.fetch(userId);
    user.send('Hello, World!');
  };

async function sendLobbyMessage(username) {                         // get user id and send message
  const guild = await client.guilds.cache.get(server_id);
  const members = await guild.members.fetch();

  //console.log(members);

  lcreator = members.find((member) => {
    if(member.user.username === username) {
      return true;
    }
    else if(member.user.username + '#' + member.user.discriminator === username) {
      return true;
    }
    else if(member.user.globalName === username) {
      return true;
    }
    else if(member.user.tag === username) {
      return true;
    }
  });

  //console.log(`The ID of ${lcreator.user.username}#${lcreator.user.discriminator} also know as ${lcreator.user.globalName} is ${lcreator.user.id}`);

  sendMessage(client, lcreator.user.id);

  /*
  members.each(member => {
      console.log(`The ID of ${member.user.username}#${member.user.discriminator} also know as ${member.user.globalName} is ${member.user.id}`);
  });*/
}

module.exports = sendLobbyMessage;

client.login(token)



