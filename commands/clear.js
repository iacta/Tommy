const Discord = require('discord.js');

exports.run = async (client, message, args) => {

if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(':x: | You must have `` Manage Messages `` permission to use this command!')

if (!args[0]) return message.reply(':x: | Enter the number of messages to be deleted after the command!')

if (args[0] <2 && args[0] > 100) return message.reply(':x: | The number to be informed must be greater than 2 and less than 100!')

const deleted = parseInt(args[0], 10);

await message.delete();

try {

await message.channel.bulkDelete(deleted);

const embedclear = new Discord.MessageEmbed()
.setColor('RED')
.setDescription(`:ballot_box_with_check: ${args[0]} messages have been successfully cleaned!`)

message.channel.send(message.author, embedclear).then(msg => msg.delete({timeout: 20000}));
} catch (e) {
message.reply(`It was not possible to delete the messages by the error: ${e}`);
}
  }

module.exports.config = {
  name: 'clear',
  aliases: ['clean']
}

