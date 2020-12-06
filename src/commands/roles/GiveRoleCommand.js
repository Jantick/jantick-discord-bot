const BaseCommand = require('../../utils/structures/BaseCommand');
const {getRolesFromMention, getMemberFromMention} = require('../utils.js')
const { MessageEmbed, Message } = require('discord.js')
const colours = require('../../json/colors.json')

module.exports = class GiveRoleCommand extends BaseCommand {
  constructor() {
    super('giverole', 'Roles', []);
  }

  async run(client, message, args) {

    if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("Command restricted to Server Staff");

    let member = message.mentions.members.first();
    if (!member) return message.channel.send("I couldn't find that user");

    let role = getRolesFromMention(message, args[1])

    if (!role) return message.channel.send("That role doesn't exist, please mention a valid role.");

    await member.roles.add(role);

    const addedRoleEmbed = new MessageEmbed()
    .setColor(colours.GreenColour)
    .addField('Affirmative',`${member.displayName} has been given ${role.name}`)
    
    message.channel.send(addedRoleEmbed);

  }
}
