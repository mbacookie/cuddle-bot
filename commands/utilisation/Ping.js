const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class PingCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ping',
            aliases: ['p', 'pong'],
            group: 'utilisation',
            memberName: 'ping',
            description: 'See the bots Ping WebSocket latency',
            examples: ['<ping']
        });
    }

    async run(message, args) {

        const time = new Date();

        const PingEmbed = new MessageEmbed()
            PingEmbed.setAuthor(this.client.user.username + ' Pong!')
            PingEmbed.addField(`The WebSocket Ping is `, `${Math.round(this.client.ws.ping)}ms`, true)
            PingEmbed.addField(`The message round-trip took `, time - message.createdAt+'ms', true)
        message.channel.send(PingEmbed);
        
    }
};
