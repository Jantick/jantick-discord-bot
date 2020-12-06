const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('Help', 'info', []);
  }

  run(client, message, args) {
    message.channel.send('Help command works');
  }
}