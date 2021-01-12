const Discord = require('discord.js');

exports.run = async (client, message, args) => {

if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply(':x: | Only members with `` Administrator `` permission can execute this command!');

const say = args.join(' ');

if (!say) return message.reply(':x: | Enter the message you want to send after the command!')

await message.delete();

message.channel.send(say);

}
module.exports.config = {
  name: 'say',
  aliases: ['say']
}