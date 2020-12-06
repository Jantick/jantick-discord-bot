const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TicketCommand extends BaseCommand {
  constructor() {
    super('Ticket', 'system', []);
  }

  run(client, message, args) {
    message.channel.send('Ticket command works');
  }
}