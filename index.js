const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const nHentaiAPI = require('nhentai-api-js');
const pag = require('./pag.json');
const entries = Object.entries(pag);
const paginator = require('./paginator');
const fs = require('fs');
let api = new nHentaiAPI();

client.login(config.token);

client.on('ready', () => {
  console.log(
    `Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`
  );
  client.user.setActivity(`${client.guilds.cache.size} guilds | n.help`, {
    type: 'WATCHING',
  });
  console.info(`Logged in as Erwin!`);
  paginator(client);
});

client.on('guildCreate', (guild) => {
  console.log(
    `New guild joined: ${guild.name} (id: ${guild.id}). This server has ${guild.memberCount} members!`
  );
});

client.on('guildDelete', (guild) => {
  console.log(`Rip: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`${client.guilds.cache.size} guilds | n.help`);
});
client.on('message', async (message) => {
  ////////////////////////////////////////////////////////////////////////////////
  //                                                                            //
  //  unPrefixed commands, dont abuse cuz they can be triggered by accident     //
  //                                                                            //
  //                                          PS:i wont add command handler >:C //
  ////////////////////////////////////////////////////////////////////////////////

  //also sends the eye emoji, emphasizing the uneasiness(i feel like i spelled this wrong)
  if (message.content === '👀') {
    if (message.author.bot) return;
    message.channel.send(':eyes:');
  }
  //just a little easter egg. I like lasagna, so, why not send a lasagna when im mentioned.
  if (message.content === 'erwin') {
    if (message.author.bot) return;
    message.channel.send('<:lasagna:704753059603021835>');
  }
  //set args
  if (message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  /////////////////////////////
  //                         //
  //   Prefixed Commands     //
  //                         //
  /////////////////////////////

  //Latency command
  if (command === 'lat') {
    const m = await message.channel.send('Wait');
    m.edit(
      `Bot is ${
        m.createdTimestamp - message.createdTimestamp
      }ms. Global is ${Math.round(client.ping)}ms`
    );
  }
  //permission checker for bot
  if (command === 'check') {
    //these are all self explanatory. i should add Diff or Apache for the ones that are false though
    let MANAGE_CHANNELS = [];
    if (message.guild.me.permissions.has('MANAGE_CHANNELS')) {
      MANAGE_CHANNELS = ['MANAGE_CHANNELS', 'true'];
    } else {
      MANAGE_CHANNELS = ['MANAGE_CHANNELS', 'false'];
    }
    let MANAGE_GUILD = [];
    if (message.guild.me.permissions.has('MANAGE_GUILD')) {
      MANAGE_GUILD = ['MANAGE_GUILD', 'true'];
    } else {
      MANAGE_GUILD = ['MANAGE_GUILD', 'false'];
    }
    let ADD_REACTIONS = [];
    if (message.guild.me.permissions.has('ADD_REACTIONS')) {
      ADD_REACTIONS = ['ADD_REACTIONS', 'true'];
    } else {
      ADD_REACTIONS = ['ADD_REACTIONS', 'false'];
    }
    let MANAGE_MESSAGES = [];
    if (message.guild.me.permissions.has('MANAGE_MESSAGES')) {
      MANAGE_MESSAGES = ['MANAGE_MESSAGES', 'true'];
    } else {
      MANAGE_MESSAGES = ['MANAGE_MESSAGES', 'false'];
    }
    let EMBED_LINKS = [];
    if (message.guild.me.permissions.has('EMBED_LINKS')) {
      EMBED_LINKS = ['EMBED_LINKS', 'true'];
    } else {
      EMBED_LINKS = ['EMBED_LINKS', 'false'];
    }
    let READ_MESSAGE_HISTORY = [];
    if (message.guild.me.permissions.has('READ_MESSAGE_HISTORY')) {
      READ_MESSAGE_HISTORY = ['READ_MESSAGE_HISTORY', 'true'];
    } else {
      READ_MESSAGE_HISTORY = ['READ_MESSAGE_HISTORY', 'false'];
    }
    let USE_EXTERNAL_EMOJIS = [];
    if (message.guild.me.permissions.has('USE_EXTERNAL_EMOJIS')) {
      USE_EXTERNAL_EMOJIS = ['USE_EXTERNAL_EMOJIS', 'true'];
    } else {
      USE_EXTERNAL_EMOJIS = ['USE_EXTERNAL_EMOJIS', 'false'];
    }
    let CHANGE_NICKNAME = [];
    if (message.guild.me.permissions.has('CHANGE_NICKNAME')) {
      CHANGE_NICKNAME = ['CHANGE_NICKNAME', 'true'];
    } else {
      CHANGE_NICKNAME = ['CHANGE_NICKNAME', 'false'];
    }
    let MANAGE_NICKNAMES = [];
    if (message.guild.me.permissions.has('MANAGE_NICKNAMES')) {
      MANAGE_NICKNAMES = ['MANAGE_NICKNAMES', 'true'];
    } else {
      MANAGE_NICKNAMES = ['MANAGE_NICKNAMES', 'false'];
    }
    let MANAGE_ROLES = [];
    if (message.guild.me.permissions.has('MANAGE_ROLES')) {
      MANAGE_ROLES = ['MANAGE_ROLES', 'true'];
    } else {
      MANAGE_ROLES = ['MANAGE_ROLES', 'false'];
    }
    let MANAGE_WEBHOOKS = [];
    if (message.guild.me.permissions.has('MANAGE_WEBHOOKS')) {
      MANAGE_WEBHOOKS = ['MANAGE_WEBHOOKS', 'true'];
    } else {
      MANAGE_WEBHOOKS = ['MANAGE_WEBHOOKS', 'false'];
    }
    //the embed to be sent
    const helpembed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('**Permission Checker**')
      .setAuthor('Nhentai Bot', 'https://i.imgur.com/uLAimaYg.jpg')
      .setDescription(
        'These are the permissions required for the bot to properly work'
      )
      .addFields(
        {
          name: '\u200B',
          value: '\u200B',
        },
        {
          name: 'Permission',
          value: `${MANAGE_CHANNELS[0]} \n ${MANAGE_GUILD[0]} \n ${ADD_REACTIONS[0]} \n ${MANAGE_MESSAGES[0]} \n ${EMBED_LINKS[0]} \n ${READ_MESSAGE_HISTORY[0]} \n ${USE_EXTERNAL_EMOJIS[0]} \n ${CHANGE_NICKNAME[0]} \n ${MANAGE_NICKNAMES[0]} \n ${MANAGE_ROLES[0]} \n ${MANAGE_WEBHOOKS[0]}`,
          inline: true,
        },
        {
          name: 'Status',
          value: `${MANAGE_CHANNELS[1]} \n ${MANAGE_GUILD[1]} \n ${ADD_REACTIONS[1]} \n ${MANAGE_MESSAGES[1]} \n ${EMBED_LINKS[1]} \n ${READ_MESSAGE_HISTORY[1]} \n ${USE_EXTERNAL_EMOJIS[1]} \n ${CHANGE_NICKNAME[1]} \n ${MANAGE_NICKNAMES[1]} \n ${MANAGE_ROLES[1]} \n ${MANAGE_WEBHOOKS[1]}`,
          inline: true,
        }
      )
      .setTimestamp()
      .setFooter(
        `Requested by ${message.author.tag}`,
        `${message.author.displayAvatarURL({
          format: 'png',
          dynamic: true,
        })}`
      );
    message.channel.send(helpembed);
  }
  //randomtest Full Embed builder with args, reaction added, no paginator. DONT CHECK THIS< its only for testing/debugging. Use the proper commands => search, random or searchID
  if (command === 'searchtest') {
    //if n.search (empty)
    if (!args.length) {
      return message.channel.send(`Give me a code ;) ${message.author}!`);
    } else {
      //else run it
      api
        .g(`${args[0]}`)
        .then((gallery) => {
          console.log(gallery);
          if (gallery.images.pages[0].t == 'j') {
            var randomExtension = 'jpg';
          } else {
            var randomExtension = 'png';
          }
          var resultArtist = gallery.tags.find(({ type }) => type === 'artist');
          if (resultArtist === undefined) {
            resultArtist = [{ name: '69' }];
          }
          var resultGroup = gallery.tags.find(({ type }) => type === 'group');
          if (resultGroup === undefined) {
            resultGroup = [{ name: '69' }];
          }
          var resultTags = gallery.tags.filter(({ type }) => type === 'tag');
          if (resultTags === undefined) {
            resultTags = [{ name: '69' }];
          }
          for (let tag of resultTags) {
            console.log(tag);
          }
          var resultCharacter = gallery.tags.find(
            ({ type }) => type === 'character'
          );
          if (resultCharacter === undefined) {
            resultCharacter = [{ name: '69' }];
          }

          let names2 = [];
          for (let tag of resultTags) {
            names2.push(tag.name);
          }

          const randomtest = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`${gallery.title.english}`)
            .setURL(`https://nhentai.net/g/${gallery.id}/`)
            .setAuthor('Nhentai Bot', 'https://i.imgur.com/uLAimaYg.jpg')
            .setDescription(`${names2.join(' | ')}`)
            .setThumbnail(
              `https://i.nhentai.net/galleries/${gallery.media_id}/1.${randomExtension}`
            )
            .addFields(
              {
                name: 'Pages',
                value: `**1** out of **${gallery.num_pages}**`,
              },
              {
                name: '\u200B',
                value: '\u200B',
              },
              {
                name: 'artist',
                value: `${resultArtist.name}`,
                inline: true,
              },
              {
                name: 'character(s)',
                value: `${resultCharacter.name}`,
                inline: true,
              },
              {
                name: 'group',
                value: `${resultGroup.name}`,
                inline: true,
              }
            )
            .setImage(
              `https://i.nhentai.net/galleries/${gallery.media_id}/1.${randomExtension}`
            )
            .setTimestamp()
            .setFooter(
              `Requested by ${message.author.tag}`,
              `${message.author.displayAvatarURL({
                format: 'png',
                dynamic: true,
              })}`
            );

          message.channel.send(randomtest).then(function (randomtest) {
            randomtest.react('◀️');
            randomtest.react('▶️');
            randomtest.react('⏹️');
          });
          let cnt = message.content;
          if (cnt !== 'randomtest') {
            message.delete({
              timeout: 1000,
            }); // ?
            let channel = message.channel.name;
            let guild = message.guild.name;
            console.log(`${guild + ', ' + channel} | ${cnt}`);
          }
        })
        .catch(message.channel.send('Error, no tag found'));
    }
  }
  //randomtest Full Embed builder , reaction added, yes paginator
  if (command === 'searchid') {
    let mID = message.channel.id;
    let author1 = message.author;
    let author2 = message.author.tag;
    //checks if channel is on whitelist.json
    fs.readFile('./channels.json', 'utf8', (err, jsonString) => {
      if (err) {
        console.log('Error reading file from disk:', err);
        return;
      }
      try {
        const channels = JSON.parse(jsonString);
        //check if channel is NSFW
        if (channels[mID] === 'true' || message.channel.nsfw) {
          //perm check for the react part, some dumbfucks think its funny to not let the bot have the permission it needs to function :/
          if (!message.guild.me.permissions.has('MANAGE_MESSAGES')) {
            message.reply(
              "I am missing permission 'MANAGE_MESSAGES'! Do 'n.check' to see which all that are missing!"
            );
          }
          //api get
          api.g(`${args[0]}`).then(async (gallery) => {
            //check for PNG or JPG and se accordingly to load proper extension on URL
            if (gallery.images.pages[0].t == 'j') {
              var randomExtension = 'jpg';
            }
            if (gallery.images.pages[0].t == 'p') {
              var randomExtension = 'png';
            }
            //Artist Filter on Data
            var resultArtist = gallery.tags.find(
              ({ type }) => type === 'artist'
            ); // working
            if (resultArtist === undefined) {
              resultArtist = [{ name: '69' }];
            }
            //Group Filter on Data
            var resultGroup = gallery.tags.find(({ type }) => type === 'group'); //working
            if (resultGroup === undefined) {
              resultGroup = [{ name: '69' }];
            }
            //Tags filter on data
            var resultTags = gallery.tags.filter(({ type }) => type === 'tag'); //working
            if (resultTags === undefined) {
              resultTags = [{ name: '69' }];
            }
            //Character filter on Tags
            var resultCharacter = gallery.tags.filter(
              ({ type }) => type === 'character'
            );
            //if no characters are inside tag, leave empty
            if (
              typeof resultCharacter != undefined &&
              resultCharacter != null &&
              resultCharacter.lenght != null &&
              resultCharacter.lenght > 0
            )
              resultCharacter.push('undefined');
            //char variable to be called later on embed
            let characters2 = [];
            for (let name of resultCharacter) {
              characters2.push(name.name);
            }
            if (characters2.lenght === 0) {
              characters2 = ['name: undefined'];
            } else {
            }
            if (resultCharacter === undefined) {
              resultTags = [{ name: '69' }];
            }
            let names2 = [];
            for (let tag of resultTags) {
              names2.push(tag.name);
            }
            //first Embed, with 1 set as default.
            let currentPage = 1;

            //value for current page

            //randomtest2 is randomtest1 but will be the new value on CurrentPage on it
            let randomtest2 = new Discord.MessageEmbed()
              .setColor('#0099ff')
              .setTitle(`${gallery.title.english}`)
              .setURL(`https://nhentai.net/g/${gallery.id}/`)
              .setAuthor('Nhentai Bot', 'https://i.imgur.com/uLAimaYg.jpg')
              .setDescription(`${names2.join(' | ')}`) // tags.names dont output string divided by commas. bummer 2
              .setThumbnail(
                `https://i.nhentai.net/galleries/${gallery.media_id}/${currentPage}.${randomExtension}`
              )
              .addFields(
                {
                  name: '\u200B',
                  value: '\u200B',
                },
                {
                  name: 'artist',
                  value: `${resultArtist.name}`,
                  inline: true,
                },
                {
                  name: 'group',
                  value: `${resultGroup.name}`,
                  inline: true,
                }
              )
              .addField('character(s)', `​${characters2}`, true)
              .addField(
                'Pages',
                `**${currentPage}** out of **${gallery.num_pages}**`
              )
              .setImage(
                `https://i.nhentai.net/galleries/${gallery.media_id}/${currentPage}.${randomExtension}`
              )
              .setTimestamp()
              .setFooter(
                `Requested by ${author2}`,
                `${author1.displayAvatarURL({
                  format: 'png',
                  dynamic: true,
                })}`
              );

            let sender = message.author.id;
            //sends the msg
            await message.channel.send(randomtest2).then(function (message) {
              //adds reactions for the collector
              message.react('◀️');
              message.react('▶️');
              message.react('⏹️');
              //filters
              const filter2 = (reaction, user) =>
                reaction.emoji.name === '◀️' && user.id != config.botID;
              const filter = (reaction, user) =>
                reaction.emoji.name === '▶️' && user.id != config.botID;
              const filter3 = (reaction, user) =>
                reaction.emoji.name === '⏹️' && user.id != config.botID;
              //collectors consts
              const collector = message.createReactionCollector(filter);
              const collector2 = message.createReactionCollector(filter2);
              const collector3 = message.createReactionCollector(filter3);
              let msg = message;

              //first collector, used to add pages +1
              collector.on('collect', (reaction, user) => {
                if (user.me) return; //make sure its not bot
                if (user.id !== sender) return; //make sure it IS author
                reaction.users.remove(`${user.id}`);
                if (currentPage === gallery.num_pages) return;
                else currentPage = currentPage + 1;
                //Updated Embed with currentPage
                let randomtest = new Discord.MessageEmbed()
                  .setColor('#0099ff')
                  .setTitle(`${gallery.title.english}`)
                  .setURL(`https://nhentai.net/g/${gallery.id}/`)
                  .setAuthor('Nhentai Bot', 'https://i.imgur.com/uLAimaYg.jpg')
                  .setDescription(`${names2.join(' | ')}`) // tags.names dont output string divided by commas.
                  .setThumbnail(
                    `https://i.nhentai.net/galleries/${gallery.media_id}/1.${randomExtension}`
                  )
                  .addFields(
                    {
                      name: '\u200B',
                      value: '\u200B',
                    },
                    {
                      name: 'artist',
                      value: `${resultArtist.name}`,
                      inline: true,
                    },
                    {
                      name: 'group',
                      value: `${resultGroup.name}`,
                      inline: true,
                    }
                  )
                  .addField('character(s)', `​${characters2}`, true)
                  .addField(
                    'Pages',
                    `**${currentPage}** out of **${gallery.num_pages}**`
                  )
                  .setImage(
                    `https://i.nhentai.net/galleries/${gallery.media_id}/${currentPage}.${randomExtension}`
                  )
                  .setTimestamp()
                  .setFooter(
                    `Requested by ${author2}`,
                    `${author1.displayAvatarURL({
                      format: 'png',
                      dynamic: true,
                    })}`
                  );
                msg.edit(randomtest);
              });
              //second collector, used to subtract pages -1
              collector2.on('collect', (reaction, user) => {
                if (user.me) return; //make sure its not bot
                if (user.id !== sender) return; //make sure its author
                reaction.users.remove(`${user.id}`);
                if (currentPage === 1) return;
                else currentPage = currentPage - 1;
                //Embed Updated
                let randomtest = new Discord.MessageEmbed()
                  .setColor('#0099ff')
                  .setTitle(`${gallery.title.english}`)
                  .setURL(`https://nhentai.net/g/${gallery.id}/`)
                  .setAuthor('Nhentai Bot', 'https://i.imgur.com/uLAimaYg.jpg')
                  .setDescription(`${names2.join(' | ')}`) // tags.names dont output string divided by commas.
                  .setThumbnail(
                    `https://i.nhentai.net/galleries/${gallery.media_id}/1.${randomExtension}`
                  )
                  .addFields(
                    {
                      name: '\u200B',
                      value: '\u200B',
                    },
                    {
                      name: 'artist',
                      value: `${resultArtist.name}`,
                      inline: true,
                    },
                    {
                      name: 'group',
                      value: `${resultGroup.name}`,
                      inline: true,
                    }
                  )
                  .addField('character(s)', `​${characters2}`, true)
                  .addField(
                    'Pages',
                    `**${currentPage}** out of **${gallery.num_pages}**`
                  )
                  .setImage(
                    `https://i.nhentai.net/galleries/${gallery.media_id}/${currentPage}.${randomExtension}`
                  )
                  .setTimestamp()
                  .setFooter(
                    `Requested by ${message.author.tag}`,
                    `${message.author.displayAvatarURL({
                      format: 'png',
                      dynamic: true,
                    })}`
                  );
                msg.edit(randomtest);
                //send event
              });
              //third collector, used to delete the message
              collector3.on('collect', (reaction, user) => {
                if (user.me) return; //make sure its not bot
                if (user.id !== sender) return; //make sure it IS author
                msg.delete();
              });
            });
          });
        } else {
          //if the second search comes false, as in the channel isnt NSFW or the channel ID isnt in whitelist, send this
          message.channel.send(
            'This channel is not NSFW or whitelisted! Type n.add to whitelist it!'
          );
        }
        //Logging good
      } catch (err) {
        console.log('Error parsing JSON string:', err);
      }
    });
  }
  //Old Search, again, it says in the command. OLD, aka dont use this, dont even bother checking code, its O-L-D
  if (command === 'searchOLD') {
    if (!args.length) {
      return message.channel.send(
        `Hit me up with your lewdness, senpai ${message.author}!`
      );
    } else {
      api.search(`${args.join(' ')}`).then((data) => {
        console.log(data);
        //pass data into gallery format
        console.log(`IDS ${data.results}`);
        console.log(`data.result Lenght${data.results.lenght}`);
        if (data.results.length < 1) {
          message.channel.send('nothing Found');
          return;
        }
        let gallery1 = data.results[0].id;

        api.g(`${gallery1}`).then((gallery2) => {
          console.log(gallery1);
          console.log(gallery2);

          //copied code from randomtest
          var randomExtension = ['jpg'];
          if (gallery2.images.pages[0].t === 'p') {
            randomExtension = 'png';
          }
          console.log(`randomExtension ${JSON.stringify(randomExtension)}`);
          var resultArtist = gallery2.tags.find(
            ({ type }) => type === 'artist'
          );
          if (resultArtist === undefined) {
            resultArtist = [{ name: '69' }];
          }
          var resultGroup = gallery2.tags.find(({ type }) => type === 'group');
          if (resultGroup === undefined) {
            resultGroup = [{ name: '69' }];
          }
          var resultCharacter2 = gallery2.tags.find(
            ({ type }) => type === 'character'
          );
          if (resultCharacter2 === undefined) {
            resultCharacter2 = [{ name: '69' }];
          }
          console.log(
            `resultCharacter2${resultCharacter2} and ${resultCharacter2.name}`
          );

          var resultTags = gallery2.tags.filter(({ type }) => type === 'tag');
          if (resultTags === undefined) {
            resultTags = [{ name: '69' }];
          }
          for (let tag of resultTags) {
            console.log(tag);
          }
          var resultCharacter = gallery2.tags.filter(
            ({ type }) => type === 'character'
          );
          if (resultCharacter === undefined) {
            resultCharacter = [{ name: '69' }];
          }
          console.log(`Character ${resultCharacter.name}`);

          let names2 = [];
          for (let tag of resultTags) {
            names2.push(tag.name);
          }

          const randomtest = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`${gallery2.title.english}`)
            .setURL(`https://nhentai.net/g/${gallery2.id}/`)
            .setAuthor('Nhentai Bot', 'https://i.imgur.com/uLAimaYg.jpg')
            .setDescription(`${names2.join(' | ')}`) // tags.names dont output string divided by commas.
            .setThumbnail(
              `https://i.nhentai.net/galleries/${gallery2.media_id}/1.${randomExtension}`
            )
            .addFields(
              {
                name: '\u200B',
                value: '\u200B',
              },
              {
                name: 'artist',
                value: `${resultArtist.name}`,
                inline: true,
              },
              {
                name: 'group',
                value: `${resultGroup.name}`,
                inline: true,
              }
            )
            .addField('character(s)', `${resultCharacter2.name}`, true)
            .addField('Pages', `**1** out of **${gallery2.num_pages}**`)
            .setImage(
              `https://i.nhentai.net/galleries/${gallery2.media_id}/1.${randomExtension}`
            )
            .setTimestamp()
            .setFooter(
              `Requested by ${message.author.tag}`,
              `${message.author.displayAvatarURL({
                format: 'png',
                dynamic: true,
              })}`
            );

          message.channel
            .send(
              randomtest
            ) /*This is the self delete. Why can it not be after function?*/
            // .then((message) => {
            //   message.delete({ timeout: 10000 });
            //}) //cannot put .then(delete) after this function to react first and THEN delete. Dunno why
            .then(function (message) {
              message.react('◀️');
              message.react('▶️');
              message.react('📖');
              message.react('⏹️');
              message.delete({
                timeout: 120000,
              });
            });
          let cnt = message.content;
          if (cnt !== 'randomtest') {
            message.delete({
              timeout: 1000,
            }); // ?
            let channel = message.channel.name;
            let guild = message.guild.name;
            console.log(`${guild + ', ' + channel} | ${cnt}`);
          }

          //delete output
          /*message.channel.send(randomtest).then((message) => {
            message.delete({ timeout: 10000 });
          }).catch;*/
          //Delete self message to prevent test spam.
          if (cnt !== 'test3') {
            message.delete({
              timeout: 1000,
            }); // ?
            let channel = message.channel.name;
            let guild = message.guild.name;
            console.log(`${guild + ', ' + channel} | ${cnt}`);
          }
        });
      });
    }
  }
  //Clears THIS BOT messages only
  if (command === 'clear') {
    channel = message.channel;
    //does the bot have permission to clear messages?
    if (!message.guild.me.permissions.has('MANAGE_MESSAGES')) {
      //no, it doesnt
      message.reply(
        "I am missing permission 'MANAGE_MESSAGES'! Do 'n.check' to see which all that are missing!"
      );
      return;
    }
    //yes, it does
    channel.messages
      .fetch()
      .then((messages) => {
        //filter for fetch, targeting messages that are from the bot
        const botMessages = messages.filter(
          (msg) => msg.author.id === config.botID
        );
        //deletes
        message.channel.bulkDelete(botMessages);
        //checks how many were deleted
        messagesDeleted = botMessages.array().length;
        //tells you how many were deleted
        message.channel.send('Bot messages deleted : ' + messagesDeleted);
        //debugging, doubt its gonna fail but keeping it for a bit.
        console.log('Total messages deleted: ' + messagesDeleted);
      })
      .catch((err) => {
        console.log('Error while doing Bulk Delete');
        console.log(err);
      });
  }
  //Serving Servers
  if (command === 'servers') {
    //embed with the info, nothing fancy here
    const servers = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle(`We are currently serving:`)
      .addFields(
        {
          name: 'Guilds',
          value: `**${client.guilds.cache.size}**`,
          inline: true,
        },
        {
          name: 'Users',
          value: `**${client.users.cache.size}**`,
          inline: true,
        },
        {
          name: 'Channels',
          value: `**${client.channels.cache.size}**`,
          inline: true,
        }
      )
      .setAuthor('Nhentai Bot', 'https://i.imgur.com/uLAimaYg.jpg');
    //sends msg then deletes it after 15 seconds, no reason to keep it in chat for too long
    message.channel.send(servers).then(function (message) {
      message.delete({
        timeout: 15000,
      });
    });
    //this doesnt necesarrily needs to be here, though i use it aswell as backup incase the first one fails
    let cnt = message.content;
    if (cnt !== 'Serving') {
      message.delete({ timeout: 1000 }); // ?
      let channel = message.channel.name;
      let guild = message.guild.name;
      console.log(`${guild + ', ' + channel} | ${cnt}`);
    }
  }
  //another test workspace, ignore
  if (command === 'test4') {
    message.channel.send('placeholder, ignore');
  }
  //say + args
  if (command === 'say') {
    //300iq 2 liner huh-duh i can code
    if (message.author.bot) return; //this prevents lil shits doing "n.say n.say n.say n.say n.say Im Smart"
    message.channel.send(`${args.join(' ')}`);
  }
  //should i do x?
  if (command === 'shouldi') {
    if (message.author.bot) return; // making sure other bots cant trigger mine
    message.channel.send(`${Math.random() >= 0.5}`); //less than 0.5 = false, equal or higher to 0.5 = true. Too lazy to make it say yes or no.
  }
  //embed builder with args
  if (command === 'embed') {
    if (message.author.bot) return; // same deal
    //would you look at that, another embed.
    const embed3 = new Discord.MessageEmbed().setDescription(
      `${args.join(' ')}`
    );
    //sends
    message.channel.send(embed3);
  }
  // for personal test, ignore
  if (command === 'look') {
    api.g(`*${args[0]}*`).then(function (gallery) {
      console.log(gallery);
      //    message.channel.send();
    });
  }
  //warning when i yank(aka steal) the emotes off someone
  if (command === 'mine') {
    message.channel.send(
      'That emote is now mine. Just wanted to let you know, not asking for permission, just ... letting you know <a:chikaDance:697200982274080878>'
    );
  }
  //fair warning, dont lewd lolis
  if (command === 'loli') {
    let author1 = message.author;
    let author2 = message.author.tag;
    let loli = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle(`Dont...`)
      .setAuthor('Nhentai Bot', 'https://i.imgur.com/uLAimaYg.jpg')
      .setDescription(`i'll come and get you if you do`) // tags.names dont output string divided by commas.
      .setImage(`https://i.imgflip.com/3jgnyz.jpg`)
      .setTimestamp()
      .setFooter(
        `Requested by ${author2}`,
        `${author1.displayAvatarURL({
          format: 'png',
          dynamic: true,
        })}`
      );
    message.channel.send(loli);
  }
  //Encode to bs64
  if (command === 'enc') {
    //not much to explain here or in Dec, its pretty much self explanatory
    var args1 = args.join(' ');
    let data = `${args1}`;
    let buff = new Buffer.from(data);
    let base64data = buff.toString('base64');

    message.channel.send(base64data);
  }
  //Decode from bs64
  if (command === 'dec') {
    let data = `${args}`;
    let buff = new Buffer.from(data, 'base64');
    let text = buff.toString('ascii');
    message.channel.send(text);
  }
  //quoter, though i must add a link version too instead of ID only
  if (command === 'quote') {
    message.channel.messages.fetch(`${args[0]}`).then((messagea) => {
      let quoter = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setAuthor(
          `${messagea.author.tag}`,
          `${messagea.author.displayAvatarURL({
            format: 'png',
            dynamic: true,
          })}`
        )
        .setDescription(`${messagea.content}`) // tags.names dont output string divided by commas.
        .setTimestamp(messagea.createdAt)
        .setFooter(
          `${messagea.channel.name} in ${messagea.channel.guild.name}`
        );
      //look at this beuty, logging trice everything. Rip console.
      console.log(messagea);
      console.log(messagea.createdTimestamp);
      console.log(messagea.createdAt);
      message.channel.send(quoter);
    });
  }
  //part of quoter, but for testing, once done i'll merge
  if (command === 'quotetest') {
    let rg1 = /.+\/(\d+)\/(\d+)\/(\d+)/.exec(`${args}`);
    message.channel.send(rg1);
  }
  //change bot nickname
  if (command === 'nick') {
    var args1 = args.join(' ');
    //check permission to change others nicknames. i could do with my own perm, but i decided to use this perm instead. deal with it.
    if (!message.guild.me.hasPermission('CHANGE_NICKNAME')) {
      message.channel.send('I dont have permission to change my nickname!');
      return;
      //if theres nothing after the command
    } else if (!args.length) {
      message.channel.send(`Give me a nickname ${message.author}!`);
      return;
      //if you pass the character limit
    } else if (args1.length > 32) {
      message.channel.send(
        `Nicknames can only be 32 chars long ${message.author}!`
      );
      return;
      //prevents lil shits from doing something along the lines of "n.nick twitch.tv/ErwinMarcos" again. *wink wink* Making sure whoever is doing it has perms to change nicks too.
    } else if (!message.member.permissions.has('MANAGE_NICKNAMES')) {
      message.reply('you dont have permission to manage nicknames!');
      return;
    }
    message.guild.me.setNickname(`${args1}`);
    //self delete, cuz it logs in audit. no reason to leave it in chat. Deal with it.
    message.delete({ timeout: 10000 });
    message.channel.send(`Nick "${args1}" set!`).then(function (message) {
      message.delete({
        timeout: 10000,
      });
    });
  }
  //adds ChannelID to whitelist
  if (command === 'add') {
    //pass perm check
    if (message.member.permissions.has('MANAGE_CHANNELS')) {
      let mID = message.channel.id;
      //read the channel file
      fs.readFile('./channels.json', 'utf8', (err, jsonString) => {
        if (err) {
          console.log('Error reading file from disk:', err);
          return;
        }
        try {
          //check if channel is already in whitelist
          const channels = JSON.parse(jsonString);
          if (channels[mID] === 'true') {
            message.channel.send('This server is already whitelisted!');
          } else {
            //add to json the channel ID to the list, janky, if its empty this WILL fail, too lazy to add a check if its empty before hand.
            const channelsOBJ = JSON.stringify(channels).replace(
              '{' && '}',
              ''
            );
            //write onto JSON
            fs.writeFile(
              './channels.json',
              `${channelsOBJ} ,"${mID}" : "true"}`,
              (err) => {
                if (err) {
                  console.log('Error writing file', err);
                } else {
                  console.log('Successfully wrote file');
                }
              }
            );
            //output
            message.channel.send('Channel added to whitelist!');
          }
        } catch (err) {
          console.log('Error parsing JSON string:', err);
        }
      });
      //if permission check returns false
    } else {
      message.reply('you dont have permission to do this!');
    }
  }
  //removes ChannelID from whitelist
  if (command === 'remove') {
    //ugh, same as the previous one, but it removes it.
    if (message.member.permissions.has('MANAGE_CHANNELS')) {
      fs.readFile('./channels.json', 'utf8', (err, jsonString) => {
        if (err) {
          console.log('Error reading file from disk:', err);
          return;
        }
        try {
          const channels = JSON.parse(jsonString);
          let mID = message.channel.id;
          //do you have any idea how janky this is? i do.
          if (channels[mID] === 'true') {
            delete channels[mID];
            const channelsOBJ = JSON.stringify(channels);
            fs.writeFile('./channels.json', channelsOBJ, (err) => {
              if (err) {
                console.log('Error writing file', err);
              } else {
                console.log('Successfully wrote file');
              }
            });
          } else {
            message.channel.send('This Channel was not whitelisted!');
            return;
          }
        } catch (err) {
          console.log('Error parsing JSON string:', err);
        }
        message.channel.send('Channel Removed from Whitelist');
      });
    } else {
      message.reply('you dont have permission to do this!');
    }
  }
  //random doujinshi, perm check in place, while aslo NSFW and whitelist check. Paginator working fine.
  if (command === 'random') {
    //long one, better off checking "searchid", i commented well there.
    let mID = message.channel.id;
    let author1 = message.author;
    let author2 = message.author.tag;
    //check if channel is in whitelist
    fs.readFile('./channels.json', 'utf8', (err, jsonString) => {
      if (err) {
        console.log('Error reading file from disk:', err);
        return;
      }
      try {
        const channels = JSON.parse(jsonString);
        //check if channel is NSFW
        if (channels[mID] === 'true' || message.channel.nsfw) {
          //perm check for react
          if (!message.guild.me.permissions.has('MANAGE_MESSAGES')) {
            message.reply(
              "I am missing permission 'MANAGE_MESSAGES'! Do 'n.check' to see which all that are missing!"
            );
          }
          //api get
          api.random().then(async (gallery) => {
            //check for PNG or JPG and se accordingly to load proper extension on URL
            if (gallery.images.pages[0].t == 'j') {
              var randomExtension = 'jpg';
            }
            if (gallery.images.pages[0].t == 'p') {
              var randomExtension = 'png';
            }
            //Artist Filter on Data
            var resultArtist = gallery.tags.find(
              ({ type }) => type === 'artist'
            ); // working
            if (resultArtist === undefined) {
              resultArtist = [{ name: '69' }];
            }
            //Group Filter on Data
            var resultGroup = gallery.tags.find(({ type }) => type === 'group'); //working
            if (resultGroup === undefined) {
              resultGroup = [{ name: '69' }];
            }
            //Tags filter on data
            var resultTags = gallery.tags.filter(({ type }) => type === 'tag'); //working
            if (resultTags === undefined) {
              resultTags = [{ name: '69' }];
            }
            //Character filter on Tags
            var resultCharacter = gallery.tags.filter(
              ({ type }) => type === 'character'
            );
            //if no characters are inside tag, leave empty
            if (
              typeof resultCharacter != undefined &&
              resultCharacter != null &&
              resultCharacter.lenght != null &&
              resultCharacter.lenght > 0
            )
              resultCharacter.push('undefined');
            //char variable to be called later on embed
            let characters2 = [];
            for (let name of resultCharacter) {
              characters2.push(name.name);
            }
            if (characters2.lenght === 0) {
              characters2 = ['name: undefined'];
            } else {
            }
            if (resultCharacter === undefined) {
              resultTags = [{ name: '69' }];
            }
            let names2 = [];
            for (let tag of resultTags) {
              names2.push(tag.name);
            }
            //first Embed, with 1 set as default.
            let currentPage = 1;

            //value for current page

            //randomtest2 is randomtest1 but will be the new value on CurrentPage on it
            let randomtest2 = new Discord.MessageEmbed()
              .setColor('#0099ff')
              .setTitle(`${gallery.title.english}`)
              .setURL(`https://nhentai.net/g/${gallery.id}/`)
              .setAuthor('Nhentai Bot', 'https://i.imgur.com/uLAimaYg.jpg')
              .setDescription(`${names2.join(' | ')}`) // tags.names dont output string divided by commas.
              .setThumbnail(
                `https://i.nhentai.net/galleries/${gallery.media_id}/${currentPage}.${randomExtension}`
              )
              .addFields(
                {
                  name: '\u200B',
                  value: '\u200B',
                },
                {
                  name: 'artist',
                  value: `${resultArtist.name}`,
                  inline: true,
                },
                {
                  name: 'group',
                  value: `${resultGroup.name}`,
                  inline: true,
                }
              )
              .addField('character(s)', `​${characters2}`, true)
              .addField(
                'Pages',
                `**${currentPage}** out of **${gallery.num_pages}**`
              )
              .setImage(
                `https://i.nhentai.net/galleries/${gallery.media_id}/${currentPage}.${randomExtension}`
              )
              .setTimestamp()
              .setFooter(
                `Requested by ${author2}`,
                `${author1.displayAvatarURL({
                  format: 'png',
                  dynamic: true,
                })}`
              );

            let sender = message.author.id;
            await message.channel.send(randomtest2).then(function (message) {
              message.react('◀️');
              message.react('▶️');
              message.react('⏹️');
              const filter2 = (reaction, user) =>
                reaction.emoji.name === '◀️' && user.id != config.botID;
              const filter = (reaction, user) =>
                reaction.emoji.name === '▶️' && user.id != config.botID;
              const filter3 = (reaction, user) =>
                reaction.emoji.name === '⏹️' && user.id != config.botID;

              const collector = message.createReactionCollector(filter);
              const collector2 = message.createReactionCollector(filter2);
              const collector3 = message.createReactionCollector(filter3);
              let msg = message;

              collector.on('collect', (reaction, user) => {
                if (user.me) return; //make sure its not bot
                if (user.id !== sender) return; //make sure it IS author
                reaction.users.remove(`${user.id}`);
                if (currentPage === gallery.num_pages) return;
                else currentPage = currentPage + 1;
                //Updated Embed with currentPage
                let randomtest = new Discord.MessageEmbed()
                  .setColor('#0099ff')
                  .setTitle(`${gallery.title.english}`)
                  .setURL(`https://nhentai.net/g/${gallery.id}/`)
                  .setAuthor('Nhentai Bot', 'https://i.imgur.com/uLAimaYg.jpg')
                  .setDescription(`${names2.join(' | ')}`) // tags.names dont output string divided by commas.
                  .setThumbnail(
                    `https://i.nhentai.net/galleries/${gallery.media_id}/1.${randomExtension}`
                  )
                  .addFields(
                    {
                      name: '\u200B',
                      value: '\u200B',
                    },
                    {
                      name: 'artist',
                      value: `${resultArtist.name}`,
                      inline: true,
                    },
                    {
                      name: 'group',
                      value: `${resultGroup.name}`,
                      inline: true,
                    }
                  )
                  .addField('character(s)', `​${characters2}`, true)
                  .addField(
                    'Pages',
                    `**${currentPage}** out of **${gallery.num_pages}**`
                  )
                  .setImage(
                    `https://i.nhentai.net/galleries/${gallery.media_id}/${currentPage}.${randomExtension}`
                  )
                  .setTimestamp()
                  .setFooter(
                    `Requested by ${author2}`,
                    `${author1.displayAvatarURL({
                      format: 'png',
                      dynamic: true,
                    })}`
                  );
                msg.edit(randomtest);
              });

              collector2.on('collect', (reaction, user) => {
                if (user.me) return; //make sure its not bot
                if (user.id !== sender) return; //make sure its author
                reaction.users.remove(`${user.id}`);
                if (currentPage === 1) return;
                else currentPage = currentPage - 1;
                //Embed Updated
                let randomtest = new Discord.MessageEmbed()
                  .setColor('#0099ff')
                  .setTitle(`${gallery.title.english}`)
                  .setURL(`https://nhentai.net/g/${gallery.id}/`)
                  .setAuthor('Nhentai Bot', 'https://i.imgur.com/uLAimaYg.jpg')
                  .setDescription(`${names2.join(' | ')}`) // tags.names dont output string divided by commas.
                  .setThumbnail(
                    `https://i.nhentai.net/galleries/${gallery.media_id}/1.${randomExtension}`
                  )
                  .addFields(
                    {
                      name: '\u200B',
                      value: '\u200B',
                    },
                    {
                      name: 'artist',
                      value: `${resultArtist.name}`,
                      inline: true,
                    },
                    {
                      name: 'group',
                      value: `${resultGroup.name}`,
                      inline: true,
                    }
                  )
                  .addField('character(s)', `​${characters2}`, true)
                  .addField(
                    'Pages',
                    `**${currentPage}** out of **${gallery.num_pages}**`
                  )
                  .setImage(
                    `https://i.nhentai.net/galleries/${gallery.media_id}/${currentPage}.${randomExtension}`
                  )
                  .setTimestamp()
                  .setFooter(
                    `Requested by ${message.author.tag}`,
                    `${message.author.displayAvatarURL({
                      format: 'png',
                      dynamic: true,
                    })}`
                  );
                msg.edit(randomtest);
                //send event
              });
              collector3.on('collect', (reaction, user) => {
                if (user.me) return; //make sure its not bot
                if (user.id !== sender) return; //make sure it IS author
                msg.delete();
              });
            });
          });
        } else {
          message.channel.send(
            'This channel is not NSFW or whitelisted! Type n.add to whitelist it!'
          );
        }
      } catch (err) {
        console.log('Error parsing JSON string:', err);
      }
    });
  }
  //test 1 workstation
  if (command === 't1') {
    //first search
    api.search(`${args.join(' ')}`).then(async (gallery) => {
      if (gallery.num_results == '0') {
        message.channel.send('No results');
        return;
      }
      //var
      let currentpage = 1;
      //embed
      const searcht1 = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`${gallery.results[currentpage].title}`)
        .setAuthor('Nhentai Bot', 'https://i.imgur.com/uLAimaYg.jpg')
        .setThumbnail(`${gallery.results[currentpage].thumbnail.s}`)
        .addFields(
          {
            name: '\u200B',
            value: '\u200B',
          },
          {
            name: 'language',
            value: `${gallery.results[currentpage].language}`,
            inline: true,
          },
          {
            name: 'ID',
            value: `${gallery.results[currentpage].id}`,
            inline: true,
          },
          {
            name: 'results',
            value: `**${currentpage}** out of **${gallery.num_results}**`,
            inline: true,
          }
        )
        .setImage(`${gallery.results[currentpage].thumbnail.s}`)
        .setTimestamp()
        .setFooter(
          `Requested by ${message.author.tag}`,
          `${message.author.displayAvatarURL({
            format: 'png',
            dynamic: true,
          })}`
        );

      let sender = message.author.id;
      await message.channel.send(searcht1).then(function (message) {
        message.react('⏮️');
        message.react('⏭️');
        message.react('⏏️');
        message.react('📖');
        //i should probably merge those...
        const filter2 = (reaction, user) =>
          reaction.emoji.name === '⏮️' && user.id != config.botID;
        const filter = (reaction, user) =>
          reaction.emoji.name === '⏭️' && user.id != config.botID;
        const filter3 = (reaction, user) =>
          reaction.emoji.name === '⏏️' && user.id != config.botID;
        const filter4 = (reaction, user) =>
          reaction.emoji.name === '📖' && user.id != config.botID;
        const filter6 = (reaction, user) =>
          reaction.emoji.name === '◀️' && user.id != config.botID;
        const filter5 = (reaction, user) =>
          reaction.emoji.name === '▶️' && user.id != config.botID;
        const filter7 = (reaction, user) =>
          reaction.emoji.name === '⏹️' && user.id != config.botID;

        const collector = message.createReactionCollector(filter);
        const collector2 = message.createReactionCollector(filter2);
        const collector3 = message.createReactionCollector(filter3);
        const collector4 = message.createReactionCollector(filter4);
        const collector5 = message.createReactionCollector(filter5);
        const collector6 = message.createReactionCollector(filter6);
        const collector7 = message.createReactionCollector(filter7);
        let msg = message;

        //page +1 on search Func
        collector.on('collect', (reaction, user) => {
          if (user.me) return; //make sure its not bot
          if (user.id !== sender) return; //make sure it IS author
          reaction.users.remove(`${user.id}`);
          if (currentpage === gallery.num_results) return;
          else currentpage = currentpage + 1;
          const searcht1 = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`${gallery.results[currentpage].title}`)
            .setAuthor('Nhentai Bot', 'https://i.imgur.com/uLAimaYg.jpg')
            .setThumbnail(`${gallery.results[currentpage].thumbnail.s}`)
            .addFields(
              {
                name: '\u200B',
                value: '\u200B',
              },
              {
                name: 'language',
                value: `${gallery.results[currentpage].language}`,
                inline: true,
              },
              {
                name: 'ID',
                value: `${gallery.results[currentpage].id}`,
                inline: true,
              },
              {
                name: 'results',
                value: `**${currentpage}** out of **${gallery.num_results}**`,
                inline: true,
              }
            )
            .setImage(`${gallery.results[currentpage].thumbnail.s}`)
            .setTimestamp()
            .setFooter(
              `Requested by ${message.author.tag}`,
              `${message.author.displayAvatarURL({
                format: 'png',
                dynamic: true,
              })}`
            );
          //Updated Embed with currentPage
          msg.edit(searcht1);
        });
        //page -1 on search Func
        collector2.on('collect', (reaction, user) => {
          if (user.me) return; //make sure its not bot
          if (user.id !== sender) return; //make sure its author
          reaction.users.remove(`${user.id}`);
          if (currentpage === 1) return;
          else currentpage = currentpage - 1;
          const searcht1 = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`${gallery.results[currentpage].title}`)
            .setAuthor('Nhentai Bot', 'https://i.imgur.com/uLAimaYg.jpg')
            .setThumbnail(`${gallery.results[currentpage].thumbnail.s}`)
            .addFields(
              {
                name: '\u200B',
                value: '\u200B',
              },
              {
                name: 'language',
                value: `${gallery.results[currentpage].language}`,
                inline: true,
              },
              {
                name: 'ID',
                value: `${gallery.results[currentpage].id}`,
                inline: true,
              },
              {
                name: 'results',
                value: `**${currentpage}** out of **${gallery.num_results}**`,
                inline: true,
              }
            )
            .setImage(`${gallery.results[currentpage].thumbnail.s}`)
            .setTimestamp()
            .setFooter(
              `Requested by ${message.author.tag}`,
              `${message.author.displayAvatarURL({
                format: 'png',
                dynamic: true,
              })}`
            );
          msg.edit(searcht1);
        });
        //delete on search Func
        collector3.on('collect', (reaction, user) => {
          if (user.me) return; //make sure its not bot
          if (user.id !== sender) return; //make sure it IS author
          msg.delete();
        });
        let currentPage = 1;
        //selector + fresh embed containing selected Func
        collector4.on('collect', (reaction, user) => {
          if (user.me) return; //make sure its not bot
          if (user.id !== sender) return; //make sure it IS author
          msg.reactions.removeAll();
          message.react('◀️');
          message.react('▶️');
          message.react('⏹️');
          let author1 = message.author;
          let author2 = message.author.tag;

          api.g(gallery.results[currentpage].id).then(async (gallery) => {
            //check for PNG or JPG and se accordingly to load proper extension on URL
            if (gallery.images.pages[0].t == 'j') {
              var randomExtension = 'jpg';
            }
            if (gallery.images.pages[0].t == 'p') {
              var randomExtension = 'png';
            }
            //Artist Filter on Data
            var resultArtist = gallery.tags.find(
              ({ type }) => type === 'artist'
            ); // working
            if (resultArtist === undefined) {
              resultArtist = [
                {
                  name: '69',
                },
              ];
            }
            //Group Filter on Data
            var resultGroup = gallery.tags.find(({ type }) => type === 'group'); //working
            if (resultGroup === undefined) {
              resultGroup = [
                {
                  name: '69',
                },
              ];
            }
            //Tags filter on data
            var resultTags = gallery.tags.filter(({ type }) => type === 'tag'); //working
            if (resultTags === undefined) {
              resultTags = [
                {
                  name: '69',
                },
              ];
            }
            //Character filter on Tags
            var resultCharacter = gallery.tags.filter(
              ({ type }) => type === 'character'
            );
            //if no characters are inside tag, leave empty
            if (
              typeof resultCharacter != undefined &&
              resultCharacter != null &&
              resultCharacter.lenght != null &&
              resultCharacter.lenght > 0
            )
              resultCharacter.push('undefined');
            //char variable to be called later on embed
            let characters2 = [];
            for (let name of resultCharacter) {
              characters2.push(name.name);
            }
            if (characters2.lenght === 0) {
              characters2 = ['name: undefined'];
            } else {
            }
            if (resultCharacter === undefined) {
              resultTags = [
                {
                  name: '69',
                },
              ];
            }
            let names2 = [];
            for (let tag of resultTags) {
              names2.push(tag.name);
            }
            //first Embed, with 1 set as default.

            //randomtest2 is randomtest1 but will be the new value on CurrentPage on it
            let searcht1 = new Discord.MessageEmbed()
              .setColor('#0099ff')
              .setTitle(`${gallery.title.english}`)
              .setURL(`https://nhentai.net/g/${gallery.id}/`)
              .setAuthor('Nhentai Bot', 'https://i.imgur.com/uLAimaYg.jpg')
              .setDescription(`${names2.join(' | ')}`) // tags.names dont output string divided by commas.
              .setThumbnail(
                `https://i.nhentai.net/galleries/${gallery.media_id}/${currentPage}.${randomExtension}`
              )
              .addFields(
                {
                  name: '\u200B',
                  value: '\u200B',
                },
                {
                  name: 'artist',
                  value: `${resultArtist.name}`,
                  inline: true,
                },
                {
                  name: 'group',
                  value: `${resultGroup.name}`,
                  inline: true,
                }
              )
              .addField('character(s)', `​${characters2}`, true)
              .addField(
                'Pages',
                `**${currentPage}** out of **${gallery.num_pages}**`
              )
              .setImage(
                `https://i.nhentai.net/galleries/${gallery.media_id}/${currentPage}.${randomExtension}`
              )
              .setTimestamp()
              .setFooter(
                `Requested by ${author2}`,
                `${author1.displayAvatarURL({
                  format: 'png',
                  dynamic: true,
                })}`
              );

            let sender = message.author.id;
            await message.edit(searcht1).then(function (message) {
              let msg = message;
            });
          });
        });
        //page 1+ on selected Func
        collector5.on('collect', (reaction, user) => {
          if (user.me) return; //make sure its not bot
          if (user.id !== sender) return; //make sure it IS author
          reaction.users.remove(`${user.id}`);
          if (currentPage === gallery.num_pages) return;
          else currentPage = currentPage + 1;
          //Updated Embed with currentPage
          api.g(gallery.results[currentpage].id).then(async (gallery) => {
            //check for PNG or JPG and se accordingly to load proper extension on URL
            if (gallery.images.pages[0].t == 'j') {
              var randomExtension = 'jpg';
            }
            if (gallery.images.pages[0].t == 'p') {
              var randomExtension = 'png';
            }
            //Artist Filter on Data
            var resultArtist = gallery.tags.find(
              ({ type }) => type === 'artist'
            ); // working
            if (resultArtist === undefined) {
              resultArtist = [
                {
                  name: '69',
                },
              ];
            }
            //Group Filter on Data
            var resultGroup = gallery.tags.find(({ type }) => type === 'group'); //working
            if (resultGroup === undefined) {
              resultGroup = [
                {
                  name: '69',
                },
              ];
            }
            //Tags filter on data
            var resultTags = gallery.tags.filter(({ type }) => type === 'tag'); //working
            if (resultTags === undefined) {
              resultTags = [
                {
                  name: '69',
                },
              ];
            }
            //Character filter on Tags
            var resultCharacter = gallery.tags.filter(
              ({ type }) => type === 'character'
            );
            //if no characters are inside tag, leave empty
            if (
              typeof resultCharacter != undefined &&
              resultCharacter != null &&
              resultCharacter.lenght != null &&
              resultCharacter.lenght > 0
            )
              resultCharacter.push('undefined');
            //char variable to be called later on embed
            let characters2 = [];
            for (let name of resultCharacter) {
              characters2.push(name.name);
            }
            if (characters2.lenght === 0) {
              characters2 = ['name: undefined'];
            } else {
            }
            if (resultCharacter === undefined) {
              resultTags = [
                {
                  name: '69',
                },
              ];
            }
            let names2 = [];
            for (let tag of resultTags) {
              names2.push(tag.name);
            }
            let author2 = message.author.tag;
            let searcht1 = new Discord.MessageEmbed()
              .setColor('#0099ff')
              .setTitle(`${gallery.title.english}`)
              .setURL(`https://nhentai.net/g/${gallery.id}/`)
              .setAuthor('Nhentai Bot', 'https://i.imgur.com/uLAimaYg.jpg')
              .setDescription(`${names2.join(' | ')}`) // tags.names dont output string divided by commas.
              .setThumbnail(
                `https://i.nhentai.net/galleries/${gallery.media_id}/1.${randomExtension}`
              )
              .addFields(
                {
                  name: '\u200B',
                  value: '\u200B',
                },
                {
                  name: 'artist',
                  value: `${resultArtist.name}`,
                  inline: true,
                },
                {
                  name: 'group',
                  value: `${resultGroup.name}`,
                  inline: true,
                }
              )
              .addField('character(s)', `​${characters2}`, true)
              .addField(
                'Pages',
                `**${currentPage}** out of **${gallery.num_pages}**`
              )
              .setImage(
                `https://i.nhentai.net/galleries/${gallery.media_id}/${currentPage}.${randomExtension}`
              )
              .setTimestamp()
              .setFooter(
                `Requested by ${author2}`,
                `${author1.displayAvatarURL({
                  format: 'png',
                  dynamic: true,
                })}`
              );
            msg.edit(searcht1);
          });
        });
        //page -1 on selected Func
        collector6.on('collect', (reaction, user) => {
          if (user.me) return; //make sure its not bot
          if (user.id !== sender) return; //make sure its author
          reaction.users.remove(`${user.id}`);
          if (currentPage === 1) return;
          else currentPage = currentPage - 1;
          //fetch selected doujinshi and send Embed Updated
          api.g(gallery.results[currentpage].id).then(async (gallery) => {
            //check for PNG or JPG and se accordingly to load proper extension on URL
            if (gallery.images.pages[0].t == 'j') {
              var randomExtension = 'jpg';
            }
            if (gallery.images.pages[0].t == 'p') {
              var randomExtension = 'png';
            }
            //Artist Filter on Data
            var resultArtist = gallery.tags.find(
              ({ type }) => type === 'artist'
            ); // working
            if (resultArtist === undefined) {
              resultArtist = [
                {
                  name: '69',
                },
              ];
            }
            //Group Filter on Data
            var resultGroup = gallery.tags.find(({ type }) => type === 'group'); //working
            if (resultGroup === undefined) {
              resultGroup = [
                {
                  name: '69',
                },
              ];
            }
            //Tags filter on data
            var resultTags = gallery.tags.filter(({ type }) => type === 'tag'); //working
            if (resultTags === undefined) {
              resultTags = [
                {
                  name: '69',
                },
              ];
            }
            //Character filter on Tags
            var resultCharacter = gallery.tags.filter(
              ({ type }) => type === 'character'
            );
            //if no characters are inside tag, leave empty
            if (
              typeof resultCharacter != undefined &&
              resultCharacter != null &&
              resultCharacter.lenght != null &&
              resultCharacter.lenght > 0
            )
              resultCharacter.push('undefined');
            //char variable to be called later on embed
            let characters2 = [];
            for (let name of resultCharacter) {
              characters2.push(name.name);
            }
            if (characters2.lenght === 0) {
              characters2 = ['name: undefined'];
            } else {
            }
            if (resultCharacter === undefined) {
              resultTags = [
                {
                  name: '69',
                },
              ];
            }
            let names2 = [];
            for (let tag of resultTags) {
              names2.push(tag.name);
            }
            let author2 = message.author.tag;
            let searcht1 = new Discord.MessageEmbed()
              .setColor('#0099ff')
              .setTitle(`${gallery.title.english}`)
              .setURL(`https://nhentai.net/g/${gallery.id}/`)
              .setAuthor('Nhentai Bot', 'https://i.imgur.com/uLAimaYg.jpg')
              .setDescription(`${names2.join(' | ')}`) // tags.names dont output string divided by commas, what a pain
              .setThumbnail(
                `https://i.nhentai.net/galleries/${gallery.media_id}/1.${randomExtension}`
              )
              .addFields(
                {
                  name: '\u200B',
                  value: '\u200B',
                },
                {
                  name: 'artist',
                  value: `${resultArtist.name}`,
                  inline: true,
                },
                {
                  name: 'group',
                  value: `${resultGroup.name}`,
                  inline: true,
                }
              )
              .addField('character(s)', `​${characters2}`, true)
              .addField(
                'Pages',
                `**${currentPage}** out of **${gallery.num_pages}**`
              )
              .setImage(
                `https://i.nhentai.net/galleries/${gallery.media_id}/${currentPage}.${randomExtension}`
              )
              .setTimestamp()
              .setFooter(
                `Requested by ${message.author.tag}`,
                `${message.author.displayAvatarURL({
                  format: 'png',
                  dynamic: true,
                })}`
              );
            msg.edit(searcht1);
            //send event
          });
        });
        //delete on selected Func
        collector7.on('collect', (reaction, user) => {
          if (user.me) return; //make sure its not bot
          if (user.id !== sender) return; //make sure it IS author
          message.channel.send('delete');
          msg.delete();
        });
      });
    });
  }
  //react test placeholder
  if (command === 'react') {
    let sender = message.author.id;
    await message.channel.send('testarea').then(function (message) {
      message.react('◀️');
      message.react('▶️');
      message.react('⏹️');
      const filter2 = (reaction, user) =>
        reaction.emoji.name === '◀️' && user.id != config.botID;
      const filter = (reaction, user) =>
        reaction.emoji.name === '▶️' && user.id != config.botID;
      const filter3 = (reaction, user) =>
        reaction.emoji.name === '⏹️' && user.id != config.botID;

      const collector = message.createReactionCollector(filter);
      const collector2 = message.createReactionCollector(filter2);
      const collector3 = message.createReactionCollector(filter3);

      collector.on('collect', (reaction, user) => {
        if (user.me) return; //make sure its not bot
        if (user.id !== sender) return; //make sure it IS author
        reaction.users.remove(`${user.id}`);
        message.channel.send('Pass +1');
      });

      collector2.on('collect', (reaction, user) => {
        if (user.me) return; //make sure its not bot
        if (user.id !== sender) return; //make sure its author
        reaction.users.remove(`${user.id}`);
        message.channel.send('Pass -1');

        //send event
      });
      collector3.on('collect', (reaction, user) => {
        if (user.me) return; //make sure its not bot
        if (user.id !== sender) return; //make sure it IS author
        message.delete();
      });
    });
  }
  // for doujinshi, perm check in place, while also NSFW and whitelist check. Paginator working fine. Com + SearchArgs
  if (command === 'search') {
    if (!args.length) {
      return message.channel.send(
        `Hit me up with your lewdness, senpai ${message.author}!`
      );
    } else {
      api.search(`${args.join(' ')}`).then((data) => {
        //pass data into gallery format
        if (!data.results.length) {
          message.channel.send('Nothing found! Sorry senpai');
          return;
        }
        console.log(data.results);
        console.log(`data.result Lenght${data.results.lenght}`);
        api.g(`${data.results[1].id}`).then((gallery2) => {
          console.log(gallery2);

          //copied code from randomtest
          var randomExtension = ['jpg'];
          if (gallery2.images.pages[0].t === 'p') {
            randomExtension = 'png';
          }
          console.log(`randomExtension ${JSON.stringify(randomExtension)}`);
          var resultArtist = gallery2.tags.find(
            ({ type }) => type === 'artist'
          );
          if (resultArtist === undefined) {
            resultArtist = [{ name: '69' }];
          }
          var resultGroup = gallery2.tags.find(({ type }) => type === 'group');
          if (resultGroup === undefined) {
            resultGroup = [{ name: '69' }];
          }
          var resultCharacter2 = gallery2.tags.find(
            ({ type }) => type === 'character'
          );
          if (resultCharacter2 === undefined) {
            resultCharacter2 = [{ name: '69' }];
          }
          console.log(
            `resultCharacter2${resultCharacter2} and ${resultCharacter2.name}`
          );

          var resultTags = gallery2.tags.filter(({ type }) => type === 'tag');
          if (resultTags === undefined) {
            resultTags = [{ name: '69' }];
          }
          for (let tag of resultTags) {
            console.log(tag);
          }
          var resultCharacter = gallery2.tags.filter(
            ({ type }) => type === 'character'
          );
          if (resultCharacter === undefined) {
            resultCharacter = [{ name: '69' }];
          }
          console.log(`Character ${resultCharacter.name}`);

          let names2 = [];
          for (let tag of resultTags) {
            names2.push(tag.name);
          }

          const randomtest = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle(`${gallery2.title.english}`)
            .setURL(`https://nhentai.net/g/${gallery2.id}/`)
            .setAuthor('Nhentai Bot', 'https://i.imgur.com/uLAimaYg.jpg')
            .setDescription(`${names2.join(' | ')}`) // tags.names dont output string divided by commas.
            .setThumbnail(
              `https://i.nhentai.net/galleries/${gallery2.media_id}/1.${randomExtension}`
            )
            .addFields(
              {
                name: '\u200B',
                value: '\u200B',
              },
              {
                name: 'artist',
                value: `${resultArtist.name}`,
                inline: true,
              },
              {
                name: 'group',
                value: `${resultGroup.name}`,
                inline: true,
              }
            )
            .addField('character(s)', `${resultCharacter2.name}`, true)
            .addField('Pages', `**1** out of **${gallery2.num_pages}**`)
            .setImage(
              `https://i.nhentai.net/galleries/${gallery2.media_id}/1.${randomExtension}`
            )
            .setTimestamp()
            .setFooter(
              `Requested by ${message.author.tag}`,
              `${message.author.displayAvatarURL({
                format: 'png',
                dynamic: true,
              })}`
            );

          message.channel
            .send(
              randomtest
            ) /*This is the self delete. Why can it not be after function?*/
            // .then((message) => {
            //   message.delete({ timeout: 10000 });
            //}) //cannot put .then(delete) after this function to react first and THEN delete. Dunno why
            .then(function (message) {
              message.react('◀️');
              message.react('▶️');
              message.react('📖');
              message.react('⏹️');
              message.delete({
                timeout: 120000,
              });
            });
          let cnt = message.content;
          if (cnt !== 'randomtest') {
            message.delete({
              timeout: 1000,
            }); // ?
            let channel = message.channel.name;
            let guild = message.guild.name;
            console.log(`${guild + ', ' + channel} | ${cnt}`);
          }

          //delete output
          /*message.channel.send(randomtest).then((message) => {
            message.delete({ timeout: 10000 });
          }).catch;*/
          //Delete self message to prevent test spam.
          if (cnt !== 'test3') {
            message.delete({
              timeout: 1000,
            }); // ?
            let channel = message.channel.name;
            let guild = message.guild.name;
            console.log(`${guild + ', ' + channel} | ${cnt}`);
          }
        });
      });
    }
  }
  //take a good guess. Links useful information plus my support server.
  if (command === 'help') {
    const helpembed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('**Help Guide**')
      .setAuthor('Nhentai Bot', 'https://i.imgur.com/uLAimaYg.jpg')
      .setDescription(
        'This should guide you on how to use this bot. The NSFW functions only work with NSFW channels or whitelist. Type n.add to add it to whitelist. \n \n For support, feel free to DM bot creator [Not Erwin#8753](https://discord.gg/6QEExsN)'
      ) // tags.names dont output string divided by commas.
      //extension is not always the same jpg,png,whatever
      .addFields(
        {
          name: '\u200B',
          value: '\u200B',
        },
        {
          name: 'Command',
          value:
            'n.say \n n.help \n n.random \n n.search \n n.servers \n n.lat \n n.shouldi \n n.embed \n n.add \n n.remove \n n.nick',
          inline: true,
        },
        {
          name: 'Arguments',
          value:
            'Anything you want \n [] \n [] \n Search Tags \n [] \n [] \n [] \n Anything you want \n [] \n [] \n name',
          inline: true,
        }
      )
      .addField(
        'Description',
        'Bot says something \n Brings help guide \n Gives you a random Doujinshi \n Searches for your tags \n Servers,channels and users the bot is serving \n Bot Latency \n Should i do this? \n Same as n.say, but embed form \n Adds channel to whitelist \n Removes channel from whitelist \n Sets the bot name',
        true
      )
      .setTimestamp()
      .setFooter(
        `Requested by ${message.author.tag}`,
        `${message.author.displayAvatarURL({
          format: 'png',
          dynamic: true,
        })}`
      );
    message.channel.send(helpembed);
    let cnt = message.content;
    if (cnt !== 'help') {
      message.delete({ timeout: 1000 });
    }
  }
});
//shitty eval =>
const clean = (text) => {
  if (typeof text === 'string')
    return text
      .replace(/`/g, '`' + String.fromCharCode(8203))
      .replace(/@/g, '@' + String.fromCharCode(8203));
  else return text;
};
client.on('message', (message) => {
  const args = message.content.split(' ').slice(1);

  if (message.content.startsWith(config.prefix + 'eval')) {
    if (message.author.id !== config.ownerID) return;
    try {
      const code = args.join(' ');
      let evaled = eval(code);

      if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);

      message.channel.send(clean(evaled), { code: 'xl' });
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
});
