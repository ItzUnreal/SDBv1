const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = "s^";
const spam = "ddlc-spam-channel";
const tag = "Sayori#0448";
const extra = require("./extra.json");
const spammsg = extra.spammsg;
const glitched01 = extra.glitched01;
const glitched02 = extra.glitched02;
const version = "v1.0";

/* Welcome to Sayori's source code! */

bot.on('ready', () => {
    console.log("Online. [" + version + ", " + bot.guilds.size + " servers.]");
    bot.user.setGame("s^help || " + version + " || " + bot.guilds.size + " servers");
});

bot.on('message', (message) => {
    if(message.author.tag != tag) {
        if(message.content.startsWith(prefix)) {
            const args = message.content.substring(prefix.length).split("  ");
            switch(args[0].toLowerCase()) {

                case 'help':
                    message.channel.send("[Prefix: **s^**]  *All Commands:* \n head - Get out of my head. (only works in a channel with the name 'ddlc-spam-channel'!) \n poem - Show me your poem. \n stab - Why would you..? \n doki - Coming soon™ \n help - This message.");
                    break;

                case 'head':
                    if(message.channel.name == spam) {
                        console.log("Sayori has spammed in " + message.guild.name);
                        message.channel.send(spammsg);
                } else {
                    message.channel.send("*This is not a spam channel.*");
                }
                    break;

                case 'stab':
                    console.log("Sayori has been killed in " + message.guild.name);
                    message.reply("you left me hanging. \n \n        *wxth hxppy thxughts,* \n        Sayori");
                    bot.user.setGame("with Yuri's pocket knife :')");
                    setTimeout(function(){
                        bot.user.setGame("s^help || " + version + " || " + bot.guilds.size + " servers");
                     }, 3000);
                    break;

                case 'poem':
                    var responses = [
                        glitched01,
                        glitched02,
                        "Exceptional.. ",
                        "This... is very good!",
                        "You caught on quickly, are you sure this is your first poem?",
                        "Your last one was better.",
                        "It has some flaws.",
                        "Don't waste my time."
                    ]

                    var result = Math.floor((Math.random() * responses.length) + 0);
                    message.reply(responses[result]);
                    break;

                default:
                    message.channel.send("*404 - command not found. Have you tried turning it off then on again?*");
                    break;
            }
        }
    }
});

bot.login(process.env.BOT_TOKEN);
