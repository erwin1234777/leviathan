# <img src="https://i.imgur.com/X6J4pvk.png" width="180">
# Leviathan Bot 


#### Before we start, THIS BOT IS SAFE FOR WORK. It does have NSFW commands, which will ONLY work in a NSFW channel or a whitelisted channel, by using n.add! You are safe, dont worry.
Now that's out of the way, heres more details.
This bot is made using Js, using d.js library. 

It is a Multiuse bot with tools that can be fun to use in large servers.

#### Admin tools: 
- Purge commands for user messages
- Clear bot messages

#### Utility: 
- User info aswell as account creation date for identifying alts
- Poll commands
- Quoter
- 8Ball/Should i?

#### Currency/Minigames:
- Balance
- Gamble
- Boss Fights

#### Incoming features/Work in Progress:
- Global Currency that works between Discord Chat and Twitch chat and can be used on both
- Emotes database so you can use emotes via the bot without nitro
                     

### Need support? 
Click [HERE](https://discord.gg/6QEExsN)
#### This bot stores the following data: 
- The Channel ID(which is used for whitelist and ONLY added when you do n.add) 
- Emotes that you post in chat
- Amount of times you used the commands (analytics) 

# Add this bot to your server! 
Simply click [HERE](https://discordapp.com/oauth2/authorize?client_id=679343193845661716&scope=bot&permissions=1543892089) to add it.

Remove permission Administrator if you wish, or leave it as is.
Administrator is NOT required, though you wont have any permission problems with the bot


## Commands
| Command | Arguments| Description                    | Example |
| --------|----------|--------------------------------|---------|
| `:eyes:`| [Blank] | Sends another :eyes: emote in chat |:eyes:|
| `n.add`| [Blank] | This add a NON NSFW channel into whitelist. For whatever reason, if you want NSFW in a channel not set NSFW, you can use this to allow bot | n.add |
| `n.acheck`| [UserID] | NOT PUBLIC, used for checking if player is already registered |n.acheck 188836645670223872|
 `n.acurrency`| [set/get/add/remove/reset] | NOT PUBLIC, used for setting amount, getting balance, removing currency, adding currency or reseting accounts to 0 |n.set 188836645670223872 300|
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
| `n.invite`| [Blank] | Gets you the invite link for this bot |n.link|
| `n.lat`| [Blank] | Check Bot's Latency |n.lat|
| `n.loli`| [Blank] | Tells you not to lewd lolis, for legal reasons(there arent any blacklisted tags, you are responsible for what you use my bot for) | n.loli |
| `n.mine`| [Blank] | Tells in chat that whatever emote you posted, i just stole it for myself | n.mine |
| `n.nick`| [Anything] | Changes the bot nickname to whatever you want. Respects discord limits, {2-32} long nick | n.nick Safe For Work Bot |
| `n.nwaifu`| [Blank] | This is a big command used for building the JSON required to add a new waifu to [Is-Your-Waifu-Legal](https://github.com/yourWaifu/is-your-waifu-legal), it uses [NaN] as a skippeable argument and [,] as a separator | n.nwaifu |
| `n.poll` | [Amount],[Description], [content1]... | make sure the 1-10 match the amount of things you want in the poll. If you do n.poll 4, its expecting a description + 4 elements | n.poll 3, This is the description/title, this is element 1, element 2, element 3 |
| `n.purge`| [@User] + [Optional 1-100 messages] | Purges messages based on @user + optional amount. if not set, it will default to 50 messages FETCHED(how far up in chat it goes), NOT deleted. Also accepts All/all as a parameter, then it clears all messages in chat | n.purge @Erwin 100 |
| `n.quote`| [MessageID or MessageLink] | Quotes the message you wanted to be quoted | n.quote 709892147935182849 |
| `n.random`| [Blank] | Gives you a random Doujinshi to read | n.random |
| `n.register`| [Blank] | Sends you info about what you need to do to register on discord minigames |n.register|
| `n.remove`| [Blank] | Removes the channel from whitelist, making the bot not be able to use NSFW commands there anymore | n.remove |
| `n.say`| [Anything] | The bot says whatever comes after the message, be it an emote or a message | n.say This is useless |
| `n.search`| [Search arguments] | Searches for your doujinshi. Check [INFO](https://nhentai.net/info/) for advanced search . Select which doujinshi you want to read by reacting with :book:| n.search blonde -tag:"loli"|
| `n.searchid`| [Doujinshi ID] | Fetches the nhentai doujinshi based on ID |n.searchid 312913|
| `n.servers`| [Blank] | Display the amount of Servers, Channels, and Users the bot is currently serving (only displays online users) | n.servers |     
| `n.shouldi`| [Anything] | Like 8ball, it will tell you if you should do something or not. Returns true or false | n.shouldi do my dishes now? |
| `n.stop`| [Blank] | NOT PUBLIC, kills the bot in an emergency. Alias [n.kill] | n.stop |
| `n.uptime`| [Blank] | Display the bots uptime | n.uptime |
| `n.user`| [ID or @User] | Display user info even if they are not in the server | n.user 188836645670223872 |



