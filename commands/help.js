const Discord = require('discord.js');
exports.run = async (client, message, args, prefix) => {
    let embed = new Discord.MessageEmbed()
    .setTitle('Ajuda - Comandos')
    .setColor(`RANDOM`)
    .setDescription(`Hi ${message.author}! My commands are: \ n \ n
    ${prefix} ban: Ban members from the server \ n
    ${prefix} unban: Unban the server members \ n
    ${prefix} ping: Checks bot latency \ n
    ${prefix} say: Make the bot send a message on a certain channel \ n
    ${prefix} clear: Clear messages from a channel`)
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    .setFooter(`Staff Server ${message.guild.name}`, message.guild.iconURL({dynamic: true}))
    message.channel.send(embed)
}
module.exports.config = {
    name: "help",
    aliases: ['help']
}
