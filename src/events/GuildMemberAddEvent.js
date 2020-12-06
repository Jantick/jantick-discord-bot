const { Message, DiscordAPIError } = require('discord.js');
const BaseEvent = require('../utils/structures/BaseEvent');
const { MessageEmbed } = require('discord.js')

module.exports = class GuildMemberAddEvent extends BaseEvent {
  constructor() {
    super('guildMemberAdd');
  }
  
  async run(client, member) {
   

    let WelcomeEmbed = new MessageEmbed()
    .setDescription(`${member} *[${member.id}]* has joined the Jantick Technologies Discord.`)
    .setColor('#4BCC85')

    let channel = message.guild.channels.cache.get("778870460879994920")
    let role = message.guild.roles.find(r => r.name === "Member");
    
    channel.send(WelcomeEmbed) 
    member.roles.add(role)

  } 
}