const Discord = require('discord.js');

exports.run = async (client, message, args) => {
if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply(':x: | You need `` Ban Members ``  permission to execute this command!')
const unbanned = message.mentions.users.first() || client.users.resolve(args[0]);
let ban = await message.guild.fetchBans();
let motivo = args.slice(1).join(' ');
if(!unbanned) return message.reply('informe o ID do usuario, para ser desbanido!');
if(!motivo) return motivo = "Não Informado!";
if(!ban.get(unbanned.id)) return message.reply('este membro não está banido!');
const embedUnban = new Discord.MessageEmbed()
.setColor('RED')
.addField('**Unbanned**', unbanned.tag, true)
.addField('**User ID**','``'+ `${unbanned}` + '``', true)
.addField('**Reason**', motivo)
.setFooter(`Server staff ${message.guild.name}`, message.guild.iconURL({dynamic: true}))
message.channel.send(embedUnban)
await message.delete();
    try{
        message.guild.members.unban(unbanned);
    }catch(err){
        console.log(err)
    }
}
module.exports.config = {
    name: "unban",
    aliases: ['unban']
}