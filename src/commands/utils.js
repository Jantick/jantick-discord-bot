async function getMemberFromMention(message, mention) {
  if (!mention) return;
  const matches = mention.match(/^<@!?(\d+)>$/);
  if (!matches) return;
  const id = matches[1];
  return message.guild.members.cache.get(id);
}

async function getRolesFromMention(message, identifier) {
  if (typeof identifier === 'string')
        if ((identifier = identifier.replace(/\s+/g, '_').toLowerCase()).match(/\d+/g))
            identifier = identifier.match(/\d+/g);
    for (let guild of client.guilds.values())
        for (let role of guild.roles.values())
            if (role.id === identifier || role.name.replace(/\s+/g, '_').toLowerCase() === identifier)
                return role;
    return null;
}
module.exports = { 
  getMemberFromMention,
  getRolesFromMention
};
