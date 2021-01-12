const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

const config = require('./config.json')
const {readdirSync} = require('fs');

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

const commands = readdirSync('./commands/').filter(file => file.endsWith('.js'));

commands.forEach(f => {
const pull = require(`./commands/${f}`);
client.commands.set(pull.config.name, pull);
pull.config.aliases.forEach(alias => {
client.aliases.set(alias, pull);
})
  });

client.on('ready', () => {
client.user.setActivity(`I am ON-LINE`)
console.log(`✅ ${client.user.username} has just started successfully with ${client.commands.size} commands!`);
});

client.on('message', (message) => {
if (message.author.bot) return;
if (message.channel.type === 'dm') return;
if (!message.content.startsWith(config.prefix)) return;

const args = message.content.trim().slice(config.prefix.length).split(/ +/g);
const command = args.shift().toLowerCase();

const execute = client.commands.get(command) || client.aliases.get(command);

if (!execute) return;

try {
execute.run(client, message, args, config.prefix);
} catch (e) {
console.log(e) 
}
  });

client.on('guildMemberAdd', async (member) => {

await member.roles.add('798602703458402345'); 

const embedWelcome = new Discord.MessageEmbed() 
.setColor('RED')
.setAuthor(`${guild.name}`, guild.iconURL({dynamic: true}))
.setDescription(`Welcome ${member.user.username}! You and number member ${guild.memberCount}!\n\nPlease read the server rules at <#798576510737842176>, after reading enjoy the server and be happy!`)
.setThumbnail(member.user.displayAvatarURL({dynamic: true}))
.setImage('https://imgur.com/QyUeVpZ.gif')
.setFooter(`${guild.name} © all rights reserved.`)
member.send(member.user,embedWelcome); 

});

client.login(config.token);


