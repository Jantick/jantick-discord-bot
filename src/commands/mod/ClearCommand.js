const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class ClearCommand extends BaseCommand {
  constructor() {
    super('clear', 'Moderation', []);
  }

  async run(client, message) {
    message.delete()

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("This command is restriced to Jantick Staff.");

    const args = message.content.split(' ').slice(1); 
    const amount = args.join(' '); 
    
    if (!amount) return message.channel.send('You haven\'t given an amount of messages which should be deleted.'); 
    if (isNaN(amount)) return message.channel.send('The amount parameter isn`t a number.'); 

    if (amount > 100) return message.channel.send('You can`t delete more than 100 messages at once.'); 
    if (amount < 1) return message.channel.send('You have to delete at least 1 message.'); 
    
    await message.channel.messages.fetch({ limit: amount }).then(messages => {
        message.channel.bulkDelete(messages 
    )
            return message.channel.send(`**${amount}** messages have been cleard - Moderator: **${message.author.tag}** [${message.author.id}]`)
});


  }
}