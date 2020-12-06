async function getMemberFromMention(message, mention) {
  if (!mention) return;
  const matches = mention.match(/^<@!?(\d+)>$/);
  if (!matches) return;
  const id = matches[1];
  return message.guild.members.cache.get(id);
}

async function getRolesFromMention(message, identifier) {
  return message.guild.roles.cache.find(role => role.id === identifier.slice(3,-1));
}
module.exports = { 
  getMemberFromMention,
  getRolesFromMention
};
