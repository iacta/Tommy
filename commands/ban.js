const Discord = require('discord.js');

exports.run = async (client, message, args, prefix) => {

if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply(':x: | You need `` Ban Members ``  permission to execute this command!')


const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

let motivo = args.slice(1).join(' ');

if (!member) return message.reply(`<:forms:790580332545310740> | Use ${prefix} <@user> (reason)`)

if (member.user.id === message.author.id) return message.reply(':x: | You cannot ban yourself!')

if (member.user.id === client.user.id) return message.reply(':x: | Wanting to be smart, right?')

if (!member.bannable) return message.reply(':x: | That person has a higher position than mine!')

if (!motivo) motivo = 'Uninformed.';

const embedBan = new Discord.MessageEmbed()
.setColor('RED')
.addField('**Banned**', member.user, true)
.addField('**Banned ID**','``'+ member.user.id + '``', true)
.addField('**Reason**', motivo)
.setThumbnail(member.user.displayAvatarURL({dynamic: true}))
.setFooter(`Server staff ${message.guild.name}`, message.guild.iconURL({dynamic: true}))

await message.delete();

try {
member.ban({reason: motivo});
message.channel.send(embedBan)
setTimeout(() => {
  message.reply('<:sucess:795331129191563313> This outlaw member was successfully banned!')
}, 5000);  
} catch (e) {
message.reply(`:x: | Failing to ban this member for the error: ${e}!`)
}
}

module.exports.config = {
  name: 'ban',
  aliases: ['']
}
