const Discord = require('discord.js');
const discloud = require('discloud-status')
exports.run = (client, message) => {

let r = new discloud.usoRam();
const embedPing = new Discord.MessageEmbed()
.setColor('RED')
.setTitle('🏓 Pong!')
.setDescription(`My instance is in ${client.ws.ping}ms!\n
And my use of ram is: ${r}`)

message.channel.send(embedPing);

}

module.exports.config = {
  name: 'ping',
  aliases: ['pong']
}