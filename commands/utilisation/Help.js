const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class HelpCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'help',
            aliases: ['commands'],
            group: 'utilisation',
            memberName: 'help',
            description: 'Shows commands of the Bot',
            args: [
                    {
                        key: 'command',
                        prompt: 'Which command would you like to view the help for?',
                        type: 'string',
                        default: ''
                    }
            ]
        });
    }
    
    async run(message, args) {

        let emo = [];

        this.client.registry.commands.filter(c => c.groupID === "emo").array().forEach(command => {
            emo.push('`'+command.name+'`');
        });
        emo.join(", ");

        let util = [];

        this.client.registry.commands.filter(c => c.groupID === "util").array().forEach(command => {
            util.push('`'+command.name+'`');
        });
        util.join(", ");

        this.client.registry.commands.filter(c => c.groupID === "utilisation").array().forEach(command => {
            util.push('`'+command.name+'`');
        });
        util.join(", ");

        const HelpEmbed = new MessageEmbed()

        const nero = this.client.registry.commands

        if(nero.find(command => command.name === args.command)){

            const cmd = this.client.registry.commands.find(command => command.name === `${args.command}`)

            HelpEmbed.setTitle("Help for " + cmd.name)
            HelpEmbed.addField("Description", cmd.description+" ")

            var aliass = "";
            var examp = "";

            if(cmd.aliases.length > 0){
                for(var i = 0; i < cmd.aliases.length;i++){
                    aliass=aliass+"`"+cmd.aliases[i]+"`";
                    if(i+1 < cmd.aliases.length){
                        aliass=aliass+", ";
                    }
                }
                HelpEmbed.addField("Aliases",aliass+" ")
            }

            if(cmd.examples != null){
                for(var i = 0; i < cmd.examples.length;i++){
                    examp=examp+"`"+cmd.examples[i]+"`";
                    if(i+1 < cmd.examples.length){
                        examp=examp+", ";
                    }
                }
                HelpEmbed.addField("Examples",examp+" ")
            }

        
        }else{

            HelpEmbed.setTitle('CuddleBot Commands')

            if(emo.length > 0){

                HelpEmbed.addField("Emotion Commands", emo+` `)

            }
            if(util.length > 0){

                HelpEmbed.addField(`Utilisation Commands`, util+" ")

            }
        }
        HelpEmbed.setColor(0xff00ff)

    return message.embed(HelpEmbed);

    }
}