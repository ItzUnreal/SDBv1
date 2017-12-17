const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = "s^";
const spam = "ddlc-spam-channel";
var stop = false;
var dead = false;

bot.on('ready', () => {
    console.log("Ready.");
    bot.user.setGame("s^help || 1.0 BETA");
});

bot.on('message', (message) => {
    if(dead == false) {
if(message.channel.name == spam && stop == false) {
    message.channel.send("Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head! Get out of my head!");
}
if(message.content == prefix+"stop") {
    stop = true;
    message.channel.send("Spam is no longer allowed.");
}
if(message.content == prefix+"go") {
    stop = false;
    message.channel.send("Spam is now allowed.");
}
if(message.content == prefix+"help") {
    message.channel.send("*All Commands: (Prefix: **s^**, all commands are case sensitive due to lazy coding by Unweal.)* \n stop - Stops spam. \n go - Allows spam again. \n help - ***BOIIIIIIII*** \n *Now get out of my head...* \n (Oh, and there's now s^stab, but who would want to do that to a cute girl like me?)");
}
if(message.content == prefix+"stab") {
    message.reply("you left me hanging. \n \n        *wxth hxppy thxughts,* \n        Sayori");
    //dead = true;
    bot.user.setGame("with Yuri's pocket knife :')");
    setTimeout(function(){
        bot.user.setGame("s^help || 1.0 BETA");
    }, 3000);
}
}});

bot.login(process.env.BOT_TOKEN);
