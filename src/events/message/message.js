const BaseEvent = require('../../utils/structures/BaseEvent');

const blacklist = require('../../scheams/blacklist-shcema')

const maintenance = require('../../schemas/aintenance-schema')
module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super('message');
  }
  
  async run(client, message) {
    if (message.author.bot) return;
    if (message.content.startsWith(client.prefix)) {
      blacklist.findOne({ id : message.author.id }, async(err, data) => {
        if(err) throw err;
        if(!data) {
      const [cmdName, ...cmdArgs] = message.content
      .slice(client.prefix.length)
      .trim()
      .split(/\s+/);
      const command = client.commands.get(cmdName);
      if (command) {
        command.run(client, message, cmdArgs);
      }  } else {
        message.channel.send('You are blacklisted!')
      }
    })
  }
  
  

  const { guild, member, content } = message
  
  
      const code = content.split('discord.gg/')[1]
      console.log('CODE:', code)
  
      if (content.includes('discord.gg/')) {
        const isOurInvite = await isInvite(guild, code)
        if (!isOurInvite) {
             
        }
      }
  }
}
