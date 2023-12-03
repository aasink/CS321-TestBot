module.exports = {
    name: 'logout',                 // logout the bot out and set status to offline
    execute(client, message) {
        message.channel.send('CS321 Test Bot Logged Out.')
        client.user.setStatus('offline')
        console.log(`${client.user.tag} Logging Out.`);
        client.destroy();
    }
  };
