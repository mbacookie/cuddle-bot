const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.author.bot) return;
  if (message.content === 'Cookie') {
    message.reply('*gives you a cookie* :cookie:');
  }
});

client.on('message', message => {
  if (message.author.bot) return;
  if (message.content === 'cookie') {
    message.reply('*gives you a cookie* :cookie:');
  }
});

client.on('message', message => {
  if (message.author.bot) return;
  if (message.content === 'Pine') {
    message.channel.send('Please change the topic, <@&708954942530125864> have been made aware and are watching');
  }
});

client.on('message', message => {
  if (message.author.bot) return;
  if (message.content === 'pine') {
    message.channel.send('Please change the topic, <@&708954942530125864> have been made aware and are watching');
  }
});

client.on('message', message => {
  if (message.author.bot) return;
  if (message.content === 'Pine!') {
    message.channel.send('Please change the topic, <@&708954942530125864> have been made aware and are watching');
  }
});

client.on('message', message => {
  if (message.author.bot) return;
  if (message.content === 'pine!') {
    message.channel.send('Please change the topic, <@&708954942530125864> have been made aware and are watching');
  }
});

const prefix = "¬ ";
client.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix) || message.author.bot) return;
 
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "help")) {
    message.channel.send("Current commands are the following- \n 	Hug me \n 	I need a hug \n 	Cuddles \n 	I need a cuddle \n 	Cookie");
  } else
  if (message.content.startsWith(prefix + "I need a cuddle")) {
	  message.reply("*Cuddles you*");
  } else
  if (message.content.startsWith(prefix + "i need a cuddle")) {
	  message.reply("*Cuddles you*");
  } else
  if (message.content.startsWith(prefix + "Cuddles")) {
	  message.reply("*Gives you a cuddle*");
  } else
  if (message.content.startsWith(prefix + "cuddles")) {
	  message.reply("*Gives you a cuddle*");
  } else
  if (message.content.startsWith(prefix + "Hug me")) {
	  message.reply("*Hugs you*");
  } else
  if (message.content.startsWith(prefix + "hug me")) {
	  message.reply("*Hugs you*");
  } else
  if (message.content.startsWith(prefix + "I need a hug")) {
	  message.reply("*Pulls you close and hugs you*");
  } else
  if (message.content.startsWith(prefix + "i need a hug")) {
	  message.reply("*Pulls you close and hugs you*");
  }
});

client.login(auth.token);
