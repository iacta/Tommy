const Discord = require('discord.js')

exports.run = async (client, message, args) => {
   let embed = new Discord.MessageEmbed() 
    .setColor('RED') 
    .setDescription(`1. Keep the content in your areas, posting content outside your normal channels may result in punishment.

    \n2. Any type of racism, harassment and / or prejudice, regardless of race, color and / or religion, will result in a ban.
    
    \n3. Respect the moderators, they work for free.
    
    \n4. Don't spam this discord.
    
    \n5. Don't mention positions without good reason.
    
    \n6. Do you have any complaints? Contact an administrator / moderator`)
    .setTitle('Rules')
    message.channel.send(embed)
}
module.exports.config = {
    name: "teste",
    aliases: []
}