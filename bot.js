// bot.js
const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');
const { token } = require('./config.json'); 
const fs = require('fs');

// Read the config file and get the bot token and prefix

const client = new Client({intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers, 
    GatewayIntentBits.GuildMessages, 
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages
] });

// Create a collection for the commands
client.commands = new Collection();

// Read the command files and register them with the client
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

// Create a collection for the events
client.events = new Collection();

// Read the event files and register them with the client
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
  const event = require(`./events/${file}`);
  client.events.set(event.name, event);
}

// Login with the bot token
client.login(token);

// Export the client object so it can be used in other files
module.exports = client;
