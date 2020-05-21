const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const Neko = require("nekos.life");
const {sfw} = new Neko();

module.exports = class CuddleCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'cuddle',
            group: 'emo',
            memberName: 'cuddle',
            description: 'Cuddle a user!',
            args: [
                {
                    key: 'member',
                    prompt: 'Who to cuddle?',
                    type: 'member',
                    default: ''
                }
            ]
        });
    }
    async run(message, args) {
       
        sfw.cuddle().then((cuddle) => {

            const CuddleEmbed = new MessageEmbed()

                if(message.author.id == args.member.id || !args.member){

                    CuddleEmbed.setAuthor(`${this.client.user.username} is cuddling ${message.author.username}`)
                
                }else {
                    
                    CuddleEmbed.setAuthor(`${message.author.username} is cuddling ${args.member.user.username}!`)
                
                }
                        
                CuddleEmbed.setImage(cuddle.url)
                CuddleEmbed.setColor(0x23ff12)
                CuddleEmbed.setFooter(`Powered by Nekos.Life`)
            message.channel.send(CuddleEmbed)

        }).catch((err) => {

            if(err) throw err;

        })
    }   
};
