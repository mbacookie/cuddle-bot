const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message.mentions', msg => {
  if (msg.content === '<@!135751892402700288') {
    msg.reply('Dont ping cookie you shit https://tenor.com/view/ping-discord-everyone-gif-14518610');
  }
});

client.on('message', msg => {
  if (msg.content === 'aboose Dictator') {
    msg.reply('Always! <376271023403958273>');
  }
});

client.on('message', msg => {
  if (msg.content === 'hug me') {
    msg.reply('*hugs you*');
  }
});

const prefix = "sb!";
client.on ("message", (message) => {
	
	msg = message.content.toLowerCase();
	
	if (message.author.bot) return;
	
	mention = message.mentions.users.first();
	
	if (msg.startsWith (prefix + "send")) {
		if (mention == null) { return; }
		message.delete();
		mentionMessage = message.content.slice (8);
		mention.sendMessage (mentionMessage);
		message.channel.send ("done!");
	}
});

client.login(auth.token);