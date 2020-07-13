# <img src="https://i.imgur.com/X6J4pvk.png" width="180">
# Leviathan Bot 


#### Before we start, THIS BOT IS SAFE FOR WORK. It does have NSFW commands, which will ONLY work in a NSFW channel or a whitelisted channel, by using n.add! You are safe, dont worry.
Now that's out of the way, heres more details.
This bot is made using Js, using d.js library. 

It is a Multiuse bot with tools that can be fun to use in large servers.

# Add this bot to your server! 
Simply click [HERE](https://discordapp.com/oauth2/authorize?client_id=679343193845661716&scope=bot&permissions=1543892089) to add it.

#### For you to use this bot on Twitch aswell, click here for more info [Jump](https://github.com/erwin1234777/leviathan#twitch-information-)

#### Admin tools: 
- Purge commands for user messages
- Clear bot messages

#### Utility: 
- Twitch/Discord Minigames crossplatform!
- User info aswell as account creation date for identifying alts
- Poll commands
- Quoter
- 8Ball/Should i?
- Tags
- Reminder

#### Currency/Minigames:
- Balance
- Gamble
- Boss Fights

#### Incoming features/Work in Progress:
- Emotes database so you can use emotes via the bot without nitro
- Public analytics
- Redeeming points (configurable per server) with perks and packages! (examples: join sub servers, do a flip, try a new cookie!)
                     

### Need support? 
Click [HERE](https://discord.gg/6QEExsN)
#### This bot stores the following data: 
- The Channel ID(which is used for whitelist and ONLY added when you do n.add) 
- Emotes that you post in chat
- Amount of times you used the commands (analytics) 
- The guild ID for moderation log purposes to prevent api abuse(constantly kicking/adding bot)

Remove permission Administrator if you wish, or leave it as is.
Administrator is NOT required, though you wont have any permission problems with the bot

## Twitch commands can be done with 'n. gamble'(with space between . and command) or 'n;gamble' to avoid link detection if you have links disallowed!

## Commands
| Command | Arguments| Description                    | Example |
| --------|----------|--------------------------------|---------|
| `:eyes:`| [Blank] | Sends another :eyes: emote in chat |:eyes:|
| `n.add`| [Blank] | This add a NON NSFW channel into whitelist. For whatever reason, if you want NSFW in a channel not set NSFW, you can use this to allow bot  | n.add |
| `n.acheck`| [UserID] | NOT PUBLIC, used for checking if player is already registered |n.acheck 188836645670223872|
 `n.acurrency`| [set/get/add/remove/reset] | NOT PUBLIC, used for setting amount, getting balance, removing currency, adding currency or reseting accounts to 0 |n.acurrency set 188836645670223872 300|
| `n.astatus`| [setstatus/setstream] | NOT PUBLIC, selects one of my status to be shown or stream for link to minigames |n.astatus setstream|
| `n.balance`| [Optional userid] | checks your current amount of points |n.balance|
| `n.boss`| [Blank] | Does a boss fight, and earns or loses coins based on it |n.boss|
| `n.check`| [Blank] | Checks for the bot's permissions and displays it for you |n.check|
| `n.clear`| [Optional 1-100 messages] | Deletes THIS BOT ONLY messages, also the optional messages is messages FECTHED, not messages DELETED | n.clear 63 |
| `n.dec`| [Base64 String] | Decodes whatever you typed from Base64 | n.dec VGhpcyBpcyBTVVBFUiBmdW4= |
| `n.embed`| [Anything] | Sends an embed containing your arguments | n.embed Embeds are cool |
| `n.enc`| [Anything] | Encodes whatever you typed into Base64 | n.enc This is SUPER fun |
| `n.gamble`| [Amuont] | Gambles the amount of points specified |n.gamble 50|
| `n.guilds`| [Blank] | NOT PUBLIC, for debugging. Display guilds per ID and their NAME | n.guild |
| `n.help`| [Blank] | Gives you this command list, but in embed format | n.help |
| `n.info`| [Blank] | Displays all the info about the bot | n.info |
| `n.invite`| [Blank] | Gets you the invite link for this bot |n.link|
| `n.lat`| [Blank] | Check Bot's Latency |n.lat|
| `n.loli`| [Blank] | Tells you not to lewd lolis, for legal reasons(there arent any blacklisted tags, you are responsible for what you use my bot for) | n.loli |
| `n.mine`| [Blank] | Tells in chat that whatever emote you posted, i just stole it for myself | n.mine |
| `n.nick`| [Anything] | Changes the bot nickname to whatever you want. Respects discord limits, {2-32} long nick | n.nick Safe For Work Bot |
| `n.nwaifu`| [Blank] | This is a big command used for building the JSON required to add a new waifu to [Is-Your-Waifu-Legal](https://github.com/yourWaifu/is-your-waifu-legal), it uses [NaN] as a skippeable argument and [,] as a separator | n.nwaifu |
| `n.poll` | [Amount],[Description], [content1]... | make sure the 1-10 match the amount of things you want in the poll. If you do n.poll 4, its expecting a description + 4 elements | n.poll 3, This is the description/title, this is element 1, element 2, element 3 |
| `n.purge`| [@User] + [Optional 1-100 messages] | Purges messages based on @user + optional amount. if not set, it will default to 50 messages FETCHED(how far up in chat it goes), NOT deleted. Also accepts All/all as a parameter, then it clears all messages in chat | n.purge @Erwin 100 |
| `n.quote`| [MessageID or MessageLink] | Quotes the message you wanted to be quoted | n.quote 709892147935182849 |
| `n.reload`| [Blank] | NOT PUBLIC, used to reload the bot commands cache |n.reload|
| `n.register`| [Blank] | Sends you info about what you need to do to register on discord minigames |n.register|
| `n.remove`| [Blank] | Removes the channel from whitelist, making the bot not be able to use NSFW commands there anymore | n.remove |
| `n.reminder`| [Time] [Reminder] | uses s(secs),m(mins),h(hours),d(days),w,(weeks),m(months) as timers.  | n.reminder 2h 52m 2s Remind me to do this! |
| `n.say`| [Anything] | The bot says whatever comes after the message, be it an emote or a message | n.say This is useless |
| `n.search`| [Search arguments] | Searches for your doujinshi. Check [INFO](https://nhentai.net/info/) for advanced search . Select which doujinshi you want to read by reacting with :book:| n.search blonde -tag:"loli"|
| `n.servers`| [Blank] | Display the amount of Servers, Channels, and Users the bot is currently serving (only displays online users) | n.servers |     
| `n.shouldi`| [Anything] | Like 8ball, it will tell you if you should do something or not. Returns true or false | n.shouldi do my dishes now? |
| `n.stop`| [Blank] | NOT PUBLIC, kills the bot in an emergency. Alias [n.kill] | n.stop |
| `n.tag`| [Tag Name] | Displays the content of that tag | n.tag some tag |
| `n.tag edit`| [Tag Name] [New Content] | Edits your tag by name, use quotation marks for multi worded tags | n.tag edit "my tag" some new content here |
| `n.tag info`| [Tag Name] | Displays the info about that tag | n.tag info leviathan |
| `n.tag transfer`| [Tag Name][@User] | Transfers the tag ownership to the person you are @'ing, use quotation marks for multi worded tags | n.tag transfer "leviathan bot" @Erwin|
| `n.tag delete`| [Tag Name] | Deletes the tag, if you are the owner of it | n.tag delete "some tag" |
| `n.uptime`| [Blank] | Display the bots uptime | n.uptime |
| `n.user`| [ID or @User] | Display user info even if they are not in the server | n.user 188836645670223872 |

#### Twitch Information :
This bot is capable of doing cross currency between Discord and Twitch. Meaning the points you are awareded from minigames and other rewards are able to be used between both platforms. If you earn 20 coins, you get those 20 coins both on twitch and discord. (shop and others incoming soon enough), as for now you arent able to outright add the bot to twitch, though you are able to fully use it on discord as any other bot with its other functions.
- To get started, DM author or ask for it to be added [HERE](https://discord.gg/6QEExsN)
- After it has been added, type anything in your stream chat to check if the bot replies to it (it will register you on the first message you send), alternatively, try n.boss to see if the bot is properly placed in your chat.
- That's it, users are now able to do the commands listed in the Minigame section and spend those points across your Discord and your Stream chat! 
- Remember that 'n.command' may be detected as a link, users are able to use 'n. gamble' , with spaces in between to avoid that if you have links disallowed in your chat! 

