const BaseCommand = require('../../utils/structures/BaseCommand');

const { MessageEmbed, Message } = require('discord.js')
const colours = require('../../json/colors.json')

module.exports = class GiveRoleCommand extends BaseCommand {
  constructor() {
    super('giverole', 'Roles', []);
  }

  async run(client, message, args) {

    if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("Command restricted to Server Staff");

    let member = getMemberFromMention(args[0]) 

    if (!member) return message.channel.send("I couldn't find that user");

    let role = getRoleFromMention(args[1])

    if (!role) return message.channel.send("That role doesn't exist, please mention a valid role.");

    await member.roles.add(role.id);

    const addedRoleEmbed = new MessageEmbed()
    .setColor(colours.GreenColour)
    .addField('Affirmative',`${member.displayName} has been given ${role.name}`)
    
    message.channel.send(addedRoleEmbed);

  }
}
