
const { Message, DiscordAPIError } = require('discord.js');
const BaseEvent = require('../utils/structures/BaseEvent');
const { MessageEmbed } = require('discord.js')

module.exports = class GuildMemberAddEvent extends BaseEvent {
  constructor() {
    super('guildMemberAdd');
  }
  
  async run(client, member) {
    guildMember.addRole(ember.guild.roles.find(role => role.name === "member"));

    let WelcomeEmbed = new MessageEmbed()
    .setDescription(`${member} *[${member.id}]* has joined the Jantick Technologies Discord.`)
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .addField('User', member, true)
    .addField('Discriminator', `\`#${member.user.discriminator}\``, true)
    .addField('ID', `\`${member.id}\``, true)
    .addField('Joined server on', `\`${moment(member.joinedAt).format('MMM DD YYYY')}\``, true)
    .addField('Joined Discord on', `\`${moment(member.user.createdAt).format('MMM DD YYYY')}\``, true)
    .setColor('#4BCC85')

    let channel = message.guild.channels.find(ch => ch.id === '778870460879994920')
    
    channel.send(WelcomeEmbed)  

  } 
}
