async function getMemberFromMention(message, mention) {
  if (!mention) return;
  const matches = mention.match(/^<@!?(\d+)>$/);
  if (!matches) return;
  const id = matches[1];
  return message.guild.members.cache.get(id);
}

async function getRolesFromMention(message, identifier) {
  if (!mention) return;
    const matches = mention.match(/^<@&(\d+)>$/);
    if (!matches) return;
    const id = matches[1];
    return message.guild.roles.cache.get(id);
    return null;
}
module.exports = { 
  getMemberFromMention,
  getRolesFromMention
};
