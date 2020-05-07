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

client.login(auth.token);
