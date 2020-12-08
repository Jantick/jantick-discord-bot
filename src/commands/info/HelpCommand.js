const BaseCommand = require('../../utils/structures/BaseCommand');

const { MessageEmbed } = require('discord.js')

module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'info', []);
  }

  run(client, message, args) {

    const helpEmbed = new MessageEmbed()
    .setAuthor('Jantick Support | Help Menu')
<<<<<<< Updated upstream
    .setDescription("```Key: < > = Required [ ] = Optional```\n**INFO**\n `!github` - Get my repository link\n `!whois <user>` - Get information on a user\n`!uptime` - Check bots uptime\n\n**MODERATION**\n`!ban <user> [reason]` - Ban a user from the server\n `!clear <num. messages>` - Clear/Purge messages in a channel\n`!infractions <user>` - Check a users infractions/warns\n`!kick <user> [reason]` - Kick a user from the server\n`!mute <user> [reason] [time]` - Mute a member\n `!nickname <user> [nickname]` - Change a users nickname\n`!slowmode <time>` - Change the slowmode of a channel\n `!unmute <user>` - Unmute a muted user\n`!warn <user> [reason]` - Warn a user in the server\n\n**ROLES**\n`!giverole <role> <user>` - Give a role to a user\n`!removerole <role> <user>` - Remove a role form a user\n`!roleinfo <role>` - Get information on a role\n\n **SYSTEM - STAFF ONLY**\n`!blacklist <user>` - Blacklist a user from using the bot\n`!eval <code>` - Eval code\n`!lock` - Lock a channel\n`!Reboot` - Reboot the bot\n`!removestaff <user>` - Remove a user from the staff list\n`!setstaff <user>` - Make a user a staff member\n`!shutdown` - Shutdown the bot\n`!unlock` - Unlock a locked channel\n`!whitelist <user>` - Remove a user form the blacklist\n\n**EXTRA HELP**\nDocumentation: [docs.jantick.com](https://docs.jantick.com)\nSupport Menu: [jantick.com/support](https://jantick.com/support)\nWebsite: [jantick.com](https://jantick.com)\nSupport Twitter: [@janticksupport](https://twitter.com/JantickSupport)")
=======
    .setDescription("```Key: < > = Required [ ] = Optional```\n**INFO**\n `!github` - Get my repository link\n `!whois <user>` - Get information on a user\n`!uptime` - Check bots uptime\n\n**NODERATION**\n`!report <user> <reason>` - Report a user\n`!ban <user> [reason]` - Ban a user from the server\n `!clear <num. messages>` - Clear/Purge messages in a channel\n`!infractions <user>` - Check a users infractions/warns\n`!kick <user> [reason]` - Kick a user from the server\n`!mute <user> [reason] [time]` - Mute a member\n `!nickname <user> [nickname]` - Change a users nickname\n`!slowmode <time>` - Change the slowmode of a channel\n `!unmute <user>` - Unmute a muted user\n`!warn <user> [reason]` - Warn a user in the server\n\n**ROLES**\n`!giverole <role> <user>` - Give a role to a user\n`!removerole <role> <user>` - Remove a role form a user\n`!roleinfo <role>` - Get information on a role\n\n **SYSTEM - STAFF ONLY**\n`!blacklist <user>` - Blacklist a user from using the bot\n`!eval <code>` - Eval code\n`!lock` - Lock a channel\n`!Reboot` - Reboot the bot\n`!removestaff <user>` - Remove a user from the staff list\n`!setstaff <user>` - Make a user a staff member\n`!shutdown` - Shutdown the bot\n`!unlock` - Unlock a locked channel\n`!whitelist <user>` - Remove a user form the blacklist\n\n**EXTRA HELP**\nDocumentation: [docs.jantick.com](https://docs.jantick.com)\nSupport Menu: [jantick.com/support](https://jantick.com/support)\nWebsite: [jantick.com](https://jantick.com)\nSupport Twitter: [@janticksupport](https://twitter.com/JantickSupport)")
>>>>>>> Stashed changes
    .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    .setColor("#2885e6");

    message.channel.send(helpEmbed)

  }
}
