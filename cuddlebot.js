const { CommandoClient } = require("discord.js-commando");
const { MessageEmbed } = require('discord.js');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const client = new CommandoClient({
  commandPrefix: '-',
  owner: ['193021560792154112', '135751892402700288'],
  invite: "https://discord.gg/QB5PGBE",
  disableEveryone: true
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['emo', 'Emotions'], ['utilisation', 'Util']
    ])	
     .registerDefaultGroups()
     .registerDefaultCommands({help: false, ping: false, prefix: true, eval: true, unknownCommand: false})
     .registerCommandsIn(path.join(__dirname, 'commands'));

client.once('ready', () => {

    console.log(`\nLogged in as ${client.user.tag} (${client.user.id}\n\nReady to Serve everyone with love <3)`);
    
    var status = ["-help for help", "Testing Stuff"]

    setInterval(function() {

        let randstat = status[Math.floor(Math.random()*status.length)]

        client.user.setPresence({activity: { name: `${randstat}` }, status: "online"})

    }, 20000);
    
 });

client.on('message', message => {
  if (message.author.bot) return;

  //Randomness

  if (message.content === 'Cookie' || message.content === 'cookie'.toUpperCase()) {

    message.reply('*gives you a cookie* :cookie:');

  }

  if (message.content === 'Pine' || message.content === 'pine'.toUpperCase() || message.content === 'Pine!' || message.content === 'pine!'.toUpperCase()) {
    
    message.channel.send('Please change the topic, <@&708954942530125864> have been made aware and are watching');

  }
})

client.login(process.env.token);
