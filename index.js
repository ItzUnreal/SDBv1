const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = "s^";
const spam = "ddlc-spam-channel";
const tag = "Sayori#0448";
const extra = require("./extra.json");
const imagebase = require("./imagebase.json")
const spammsg = extra.spammsg;
const glitched01 = extra.glitched01;
const glitched02 = extra.glitched02;
const monika1 = extra.monika1;
const monika2 = extra.monika2;
const version = "v1.1";

/* Welcome to Sayori's source code! */

bot.on('ready', () => {
    console.log("Online. [" + version + ", " + bot.guilds.size + " servers.]");
    bot.user.setGame("s^help || " + version + " || " + bot.guilds.size + " servers || Just hanging around...");
});

bot.on('message', (message) => {
    if(message.content.includes('Sayori') || message.content.includes('sayori')) {
        if(message.content.includes('kys') || message.content.includes('KYS')) {
            message.reply("", {
                file: imagebase.sayori0
            });
        }
    } 
    if(message.author.tag != tag) {
        if(message.content.startsWith(prefix)) {
            const args = message.content.substring(prefix.length).split("  ");
            switch(args[0].toLowerCase()) {

                case 'help':
                    message.channel.send("*All Commands:* \n\nPrefix: **s^**\n trigger - Get out of my head. **(only works in a channel with the name 'ddlc-spam-channel')** \n poem - Show me your poem. \n stab, hang, vomit, or delete - Why would you..? \n doki - Shows an image of a random Doki Doki character - Coming soon™ \n help - This message.");
                    break;

                case 'trigger':
                    if(message.channel.name == spam) {
                        console.log("Sayori has began spamming in " + message.guild.name);
                        message.channel.send(spammsg);
                        message.channel.send(spammsg);
                        message.channel.send(spammsg);
                        message.channel.send(spammsg);
                        message.channel.send(spammsg);
                } else {
                    message.channel.send("*This is not a spam channel.*");
                }
                    break;

                case 'stab':
                    message.channel.send("", {
                        file: imagebase.yuri0
                    });
                    message.reply("you're so edgy. \n \n        *with hugs and slashes,* \n        Yuri");

                    break;

                case 'hang':
                    message.channel.send("", {
                        file: imagebase.sayori0
                    });
                    message.reply("you left me hanging. \n \n        *wxth hxppy thxughts,* \n        Sayori");

                    break;

                case 'vomit':
                    message.channel.send("", {
                        file: imagebase.natsuki0
                    });
                    message.reply("you make me sick. \n \n        *utterly disgusted,* \n        Natsuki");

                    break;

                case 'delete':
                    message.channel.send("", {
                        file: imagebase.monika0
                    });
                    message.reply(monika1 + "\n \n        " + monika2 + " \n        Monika");

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
                        "Don't waste my time.",
                        "This looks like something Yuri would write...",
                        "This looks like something I would write...",
                        "This looks like something Natsuki would write...",
                        "This looks like something... no one would write! Stupid.",
                        "*Next!*"
                    ]

                    var chosen = Math.floor((Math.random() * responses.length) + 0);
                    message.reply(responses[chosen]);
                    break;

                case 'doki':
                    /*var images = [
                        imagebase.yuri1,
                        imagebase.yuri2
                    ]
                    var imgresult = Math.floor((Math.random() * images.length) + 0);
                    message.channel.send("Here's your doki: ", {
                        file: images[imgresult]
                    });*/
                    message.channel.send("Why would you try to use a WIP command >~<");
                    break;

                default:
                    message.channel.send("*404 - command not found. Have you tried turning it off then on again?*");
                    break;
            }
        }
    }
});

bot.login(process.env.BOT_TOKEN);
