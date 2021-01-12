const Discord = require('discord.js');

exports.run = async (client, message, args, prefix) => {
    const iacta = client.users.cache.get('794343139200335913');
    if(!message.author == iacta) return message.reply('only special people can use this command :3');
    if(!args[0]) return message.reply('report arguments!');
    
    eval(args.join('  '))
    const channel = client.channels.cache.get('798596988593504336')
    let embed = new Discord.MessageEmbed()
    .setColor('Black')
    .addField('**Executor**', message.author, true)
    .addField('**Function**','``'+ args.join('  ') + '``', true)
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    .setFooter(`Server Staff ${message.guild.name}`, message.guild.iconURL({dynamic: true}))
    channel.send(embed)
}
module.exports.config = {
    name: "eval",
    aliases: []
}