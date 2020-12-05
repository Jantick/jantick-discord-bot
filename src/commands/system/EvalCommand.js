
const { MessageEmbed } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
module.exports = class GiveRoleCommand extends BaseCommand {
  constructor() {
    super('eval', 'System', []);
  }

  async run(client, message, args) {
    let code = args.join(' '),
    res;

try {
    res = await new Promise((resolve, reject) => resolve(eval(code)));

    if (typeof res !== 'string') {
        res = require('util').inspect(res, { depth: 0 });
    }

    if (res.includes(process.env.DISCORD_BOT_TOKEN)) {!
        res === res.replace(new RegExp(process.env.DISCORD_BOT_TOKEN, 'g'), '[TOK3N]');
    }

    message.channel.send(res, { split: true });
} catch (e) {
    message.channel.send(`Something went wrong: ${e}`);
}
  }
}