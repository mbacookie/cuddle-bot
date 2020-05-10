const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'i need a cuddle') {
    msg.reply('*cuddles you*');
  }
});

client.on('message', msg => {
  if (msg.content === 'cuddles') {
    msg.reply('*gives you a cuddle*');
  }
});

client.on('message', msg => {
  if (msg.content === 'hug me') {
    msg.reply('*hugs you*');
  }
});

client.on('message', msg => {
  if (msg.content === 'i need a hug') {
    msg.reply('*pulls you close and hugs you*');
  }
});

client.on('message', msg => {
  if (msg.content === 'I need a hug') {
    msg.reply('*pulls you close and hugs you*');
  }
});

client.on('message', msg => {
  if (msg.content === 'Hug me') {
    msg.reply('*hugs you*');
  }
});

client.on('message', msg => {
  if (msg.content === 'Cuddles') {
    msg.reply('*gives you a cuddle*');
  }
});

client.on('message', msg => {
  if (msg.content === 'I need a cuddle') {
    msg.reply('*cuddles you*');
  }
});

client.on('message', msg => {
  if (msg.content === 'Cookie') {
    msg.reply('*gives you a cookie* :cookie:');
  }
});

client.on('message', msg => {
  if (msg.content === 'cookie') {
    msg.reply('*gives you a cookie* :cookie:');
  }
});

const prefix = ">~< ";
client.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;
 
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "help")) {
    message.channel.send("Current commands are the following- \n 	Hug me \n 	I need a hug \n 	Cuddles \n 	I need a cuddle \n 	Cookie \n \n commands do not need '>~<' placed in front to work");
  }
});

client.login(auth.token);
