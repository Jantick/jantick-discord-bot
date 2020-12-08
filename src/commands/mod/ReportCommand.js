const BaseCommand = require('../../utils/structures/BaseCommand');

const Discord = require('discord.js')

const colours = require('../../json/colors.json')

module.exports = class ReportCommand extends BaseCommand {
  constructor() {
    super('report', 'mod', []);
  }

  async run(client, message, args) {

    let User = message.mentions.users.first() || null;
    const infractionsSchema = require("../../scheams/infractions-schema")
    
    let pleaseMention = new Discord.MessageEmbed()
    .setDescription("Please mention the user you wish to report.")
    .setColor(colours.RedColour)

    if (User == null) {
      return message.channel.send(pleaseMention);
    } else {
    
      let Reason = message.content.slice(process.env.DISCORD_BOT_PREFIX.length + 22 + 7) || null;
    
      let reasonReport = new Discord.MessageEmbed()
      .setDescription("You need to specify a reason for the report")
      .setColor(colours.RedColour)

      if (Reason == null) {
        return message.channel.send(reasonReport);
      }

      let Avatar = User.displayAvatarURL({ dynamic: true, size: 512 });
      

      let Channel = message.guild.channels.cache.find(
        (ch) => ch.name === "user-reports"
      );
      if (!Channel)

        

      var puncode = "";
      var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var charactersLength = characters.length;
      for (var i = 0; i < 10; i++) {
        puncode += characters.charAt(Math.floor(Math.random() * charactersLength));
      }

        let userReported = new Discord.MessageEmbed()
        .setAuthor(`${User.tag} Report`, Avatar)
        .setDescription(`**${User}** was reported by ${message.author}`)
        .addField(`Reason`, `\`\`\`${Reason.slice(1)}\`\`\``)
        .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
        .setColor(colours.GreenColour)


      message.channel.send(userReported)

      var result = await infractionsSchema.find({
        userId: message.author.id,
      })

      let Embed = new Discord.MessageEmbed()
      .setTitle(`User Report`)
      .setDescription(
        `User \`${User.tag}\` Was Reported. `
      )
      .setColor(colours.MainColour)
      .setFooter(`${User.tag}`, Avatar)
      .addFields(
        { name: "Moderator", value: `${message.author} \n> \`Tag\` - ${message.author.tag}`, inline: false },
        { name: "Reported User", value: ` ${User} \n> \`Tag\` - ${User.tag}`, inline: false },
        { name: "Reason", value: `\`${Reason.slice(1)}\``, inline: false },
        {
          name: "Date (M/D/Y)",
          value: `> ${new Intl.DateTimeFormat("en-US").format(Date.now())}`,
          inline: false,
        }
      )
    
      
    Channel.send(Embed)
    }
  }
}