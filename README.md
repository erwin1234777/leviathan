# <img src="https://i.imgur.com/X6J4pvk.png" width="180"> 
# Leviathan Bot    


This bot is made using Typescript, using discord.js library. 

It is a Multiuse bot with tools that can be fun to use in large servers.
This bot is Safe For Work

# Add this bot to your server! 
Simply click [HERE](https://discordapp.com/oauth2/authorize?client_id=679343193845661716&scope=bot&permissions=1543892089) to add it.

#### For you to use this bot on Twitch aswell, click here for more info [Jump](https://github.com/erwin1234777/leviathan#twitch-information-)

#### Admin tools: 
- Purge commands for user messages
- Clear bot messages
- Statistics

#### Utility: 
- EMOTES without NITRO! 
- Twitch/Discord Minigames crossplatform!
- User info aswell as account creation date for identifying alts
- Poll commands
- Quoter
- 8Ball/Should i?
- Tags
- Reminder
- Memes
- Rp Commands
- Welcomer
- Farewell Notifications
- Starboard

#### Currency/Minigames:
- Balance
- Gamble
- Boss Fights 

#### Incoming features/Work in Progress:
- Crosschat, so you can talk to your Discord Chat while streaming on twitch, and vice versa!
                     
### Need support? 
Click [HERE](https://discord.gg/6QEExsN)
#### This bot stores the following data: 
- The Channel ID(which is used for whitelist and ONLY added when you do n.add) 
- Emotes that you post in chat
- Amount of times you used the commands (analytics) 
- The guild ID for moderation log purposes to prevent api abuse(constantly kicking/adding bot)
- Messages WITHOUT content(i only store the fact that you sent a message, not what it has), for analytic commands
- Join/Leave notifications

Remove permission Administrator if you wish, or leave it as is.
Administrator is NOT required, though you wont have any permission problems with the bot,
Simply dm the author Not Erwin#8753 if you request data deletion

## Twitch commands can be done with 'n. gamble'(with space between . and command) or 'n;gamble' to avoid link detection if you have links disallowed!
## For Visual Tutorial, click here [JUMP](https://github.com/erwin1234777/leviathan#visual-tutorial)

## Discord Commands
| Command | Arguments| Description                    | Example |
| --------|----------|--------------------------------|---------|
| `n.acheck`| [UserID] | NOT PUBLIC, used for checking if player is already registered |n.acheck 188836645670223872|
| `n.acurrency`| [set/get/add/remove/reset] | NOT PUBLIC, used for setting amount, getting balance, removing currency, adding currency or reseting accounts to 0 |n.acurrency set 188836645670223872 300|
| `n.anick`| [guildid + nickname] | NOT PUBLIC, Changed the nickname in a certian guild. |n.anick 628731905423966219 Nickname! |
| `n.announcement`| [toggle/message] | NOT PUBLIC, toggles announcement mode on/off on status. |n.announcement Ported to Typescript!|
| `n.astatus`| [setstatus/setstream] | NOT PUBLIC, selects one of my status to be shown or stream for link to minigames |n.astatus setstream|
| `n.balance`| [Optional userid] | checks your current amount of points |n.balance|
| `n.boss`| [Blank] | Does a boss fight, and earns or loses coins based on it |n.boss|
| `n.check`| [Blank] | Checks for the bot's permissions and displays it for you |n.check|
| `n.clear`| [Optional 1-100 messages] | Deletes THIS BOT ONLY messages, also the optional messages is messages FECTHED, not messages DELETED | n.clear 63 | 
| `n.count`| [Message] | Counts the amount of characters the message has | n.count four | 
| `n.crosschat`| [default/enable/allowed] | NOT FULLY IMPLEMENTED, wait until release! | n.crosschat enable |
| `n.dec`| [Base64 String] | Decodes whatever you typed from Base64 | n.dec VGhpcyBpcyBTVVBFUiBmdW4= |
| `n.duel`| [@User + Amount] | Duels a user with a wager | n.duel @Leviathan 30 |
| `n.e`| [Message] | If theres an emote in chat [:emoteName:] it'll send in chat as you with that emote! | n.e :notlikechika: free nitro bot lmao |
| `n.embed`| [Anything] | Sends an embed containing your arguments | n.embed Embeds are cool |
| `n.enc`| [Anything] | Encodes whatever you typed into Base64 | n.enc This is SUPER fun |
| `n.farewell`| [enable/disable] | Enable/Disable will turn on/off the feature(off by default). | n.farewell enable |
| `n.farewell`| [message] | Sets the farewell message in the embed. Max 1900 characters. | n.farewell message This is the farewell message! |
| `n.farewell`| [output] | Sets the current channel to be where it outputs the message. | n.farewell output |
| `n.gamble`| [Amount] | Gambles the amount of points specified |n.gamble 50|
| `n.give`| [Amount] | Gives a @user [Amount] of coins |n.give @Erwin 10|
| `n.guilds`| [Blank] | NOT PUBLIC, for debugging. Display guilds per ID and their NAME | n.guild |
| `n.help`| [Blank] | Gives you the link to this doc, in embed format | n.help |
| `n.hug`| [@User] | RP Command, hugs someone | n.hug @Leviathan |
| `n.info`| [Blank] | Displays all the info about the bot | n.info |
| `n.invite`| [Blank] | Gets you the invite link for this bot |n.link|
| `n.ipc`| [Blank] | NOT PUBLIC, used to manually connect to IPC pipe |n.ipc|
| `n.kiss`| [@User] | Roleplay command |n.kiss @Leviathan|
| `n.lat`| [Blank] | Check Bot's Latency |n.lat|
| `n.lick`| [@User] | RP command, licks someone |n.lick @Leviathan |
| `n.link`| [token] | Used for linking account with twitch. Grab token from Twitch Chat |n.token [Token]|
| `n.market`| [Blank] |Shop for buying Emote Tokens so you can use emotes in chat | n.market |
| `n.meme`| [Blank] | Sends a meme/post in chat | n.meme |
| `n.mine`| [Blank] | Tells in chat that whatever emote you posted, i just stole it for myself | n.mine |
| `n.nick`| [Anything] | Changes the bot nickname to whatever you want. Respects discord limits, {2-32} long nick | n.nick Safe For Work Bot |
| `n.pat`| [@User] | RP command, pats someone | n.pat @Leviathan |
| `n.permbit`| [Perm Bit Field] | Resolves a Permission Bit field from discord | n.permbit 2146958839 |
| `n.poll` | [Amount],[Description], [content1]... | make sure the 1-10 match the amount of things you want in the poll. If you do n.poll 4, its expecting a description + 4 elements | n.poll 3, This is the description/title, this is element 1, element 2, element 3 |
| `n.punch`| [@User] | Roleplay command | n.punch @Leviathan |
| `n.purge`| [@User] + [Optional 1-100 messages] | Purges messages based on @user + optional amount. if not set, it will default to 50 messages FETCHED(how far up in chat it goes), NOT deleted. Also accepts All/all as a parameter, then it clears all messages in chat | n.purge @Erwin 100 |
| `n.quote`| [MessageID or MessageLink] | Quotes the message you wanted to be quoted | n.quote 709892147935182849 |
| `n.redeem all/list`| [Blank] | Displays all packs in the current guild | n.redeem list |
| `n.redeem create`| [name, price, description] | Creates a pack, arguments divided by comma! | n.redeem create test, 1, description |
| `n.redeem delete`| [name] | Deletes a pack | n.redeem delete test |
| `n.redeem edit`| [name, price, description] | Edits a pack, arguments divided by comma! | n.redeem edit test, 2, new description |
| `n.redeem`| [Pack Name] | Redeems a pack! | n.redeem test |
| `n.register`| [Blank] | Sends you info about what you need to do to register on discord minigames |n.register|
| `n.reload`| [Blank] | NOT PUBLIC, used to reload the bot commands cache |n.reload|
| `n.reminder`| [Time] [Reminder] | uses s(secs),m(mins),h(hours),d(days),w,(weeks),m(months) as timers.  | n.reminder 2h 52m 2s Remind me to do this! |
| `n.say`| [Anything] | The bot says whatever comes after the message, be it an emote or a message | n.say This is useless |
| `n.servers`| [Blank] | Display the amount of Servers, Channels, and Users the bot is currently serving (only displays online users) | n.servers |     
| `n.shouldi`| [Anything] | Like 8ball, it will tell you if you should do something or not. Returns true or false | n.shouldi do my dishes now? |
| `n.slap`| [@user] | Roleplay command | n.slap @Leviathan |
| `n.snipe`| [Blank] | Display last deleted message in that channel | n.snipe |
| `n.speak`| [Message] | NOT FULLY IMPLEMENTED, wait until full release | n.speak Some Message |
| `n.stats`| [all/query] | Used to see messages in guild. [-me/-author] for your messages, -channel for messages in channel, all for all message stats | n.speak Some Message |
| `n.stop`| [Blank] | NOT PUBLIC, kills the bot in an emergency. Alias [n.kill] | n.stop |
| `n.sudo`| [Message] | RP Command, will delete your message and send it with the bot(RP talk as the bot) | n.sudo Some message here|
| `n.tag delete`| [Tag Name] | Deletes the tag, if you are the owner of it | n.tag delete "some tag" |
| `n.tag edit`| [Tag Name] [New Content] | Edits your tag by name, use quotation marks for multi worded tags | n.tag edit "my tag" some new content here |
| `n.tag info`| [Tag Name] | Displays the info about that tag | n.tag info leviathan |
| `n.tag transfer`| [Tag Name][@User] | Transfers the tag ownership to the person you are @'ing, use quotation marks for multi worded tags | n.tag transfer "leviathan bot" @Erwin|
| `n.tag`| [Tag Name] | Displays the content of that tag | n.tag some tag |
| `n.uptime`| [Blank] | Display the bots uptime | n.uptime |
| `n.user`| [ID or @User] | Display user info even if they are not in the server | n.user 188836645670223872 |
| `n.welcomer`| [enable/disable] | Enable/Disable will turn on/off the feature(off by default). | n.welcomer enable |
| `n.welcomer`| [message] | Sets the welcome message in the embed. Max 1900 characters. | n.welcomer message This is the welcome message! |
| `n.welcomer`| [output] | Sets the current channel to be where it outputs the message. | n.welcomer output |
#### Twitch Information :
This bot is capable of doing cross currency between Discord and Twitch. Meaning the points you are awarded from minigames and other rewards are able to be used between both platforms. If you earn 20 coins, you get those 20 coins both on twitch and discord. (shop and others incoming soon enough).
- To get started, head over to the [TWITCH](https://www.twitch.tv/leviathanapp), then go in CHAT(even if offline), and type n.susbcribe. Or, click [HERE](https://www.twitch.tv/leviathanapp/chat) to get directly to chat, and type n.subscribe
- After it has been added, type anything in your stream chat to check if the bot replies to it (it will register you on the first message you send), alternatively, try n.test to see if the bot is properly placed in your chat.
- That's it, users are now able to do the commands listed in the Minigame section and spend those points across your Discord and your Stream chat! 
- Remember that 'n.command' may be detected as a link, users are able to use 'n. gamble' , with spaces in between to avoid that if you have links disallowed in your chat! 

## Twitch Commands
| Command | Arguments| Description                    | Example |
| --------|----------|--------------------------------|---------|
| `@leviathanapp`| [Blank] | Will tell you the prefix currently in place on your stream |@leviathanapp|
| `n.balance`| [Blank] | Checks your current balance |n.balance|
| `n.boss`| [Blank] | Does a boss. If you lose more money than you have, it tells you're bankrupt! |n.boss|
| `n.coinflip`| [Blank] | Tosses a coin, Head or Tails |n.coinflip|
| `n.dice`| [Blank] | Rolls a dice, 1-6 |n.dice|
| `n.discord`| [Blank] | Displays the Streamer discord link/message |n.discord|
| `n.discord`| [set] | Sets the discord command message |n.discord set https://discord.gg/6QEExsN|
| `n.facebook`| [Blank] | Displays the Streamer facebook link/message |n.facebook|
| `n.facebook`| [set] | Sets the facebook command message |n.facebook set [Link]|
| `n.followage`| [Blank] | Follow info about the user who uses command towards the streamer |n.followage|
| `n.followers`| [Blank] | Total followers the streamer has |n.followers|
| `n.gamble`| [Amount] | Gambles the current amount |n.gamble 20|
| `n.give`| [@User + Amount] | Gives a mentioned user(@User) coins |n.give @LeviathanAPP 20|
| `n.help`| [Blank] | Help info |n.help|
| `n.instagram`| [Blank] | Displays the Streamer instagram link/message |n.instagram|
| `n.instagram`| [set] | Sets the instagram command message |n.instagram set [Link]|
| `n.link`| [Blank] | MAKE SURE DM IS OPEN, will send you a dm of the link to post in discord so you can link your account! |n.link|
| `n.lurk`| [Blank] | Displays the Lurk message |n.lurk|
| `n.lurk`| [set] | Sets the lurk command message to display |n.lurk set [Message]|
| `n.mixer`| [Blank] | Displays the Streamer mixer link/message |n.mixer|
| `n.mixer`| [set] | Sets the mixer command message |n.mixer set [Link]|
| `n.poll`| [Elements] + time(seconds) | Makes a poll in chat |n.poll [Minecraft, skyrim] 60|
| `n.prefix`| [Prefix] | Changes the bot prefix, MAXIMUM 3 CHARS |n.prefix !|
| `n.reload`| [Blank] | NOT PUBLIC, reloads the commands of the bot |n.reload|
| `n.reminder`| [s/m/h/d] + [reminder] | Reminder command. use s(second)m(minutes)h(hours)d(days) to specify time |n.reminder 10m Remind me!|
| `n.rip`| [Blank] | Adds +1 to your rip count |n.rip|
| `n.rip`| [reset] | Resets rip count to 0 |n.rip reset|
| `n.rip`| [add] | Adds X number to your rip count |n.rip add 20|
| `n.speak`| [Blank] | UNUSED, ignore |n.speak|
| `n.stats`| [Blank] | Display the bots current stats |n.stats|
| `n.subscribe`| [Blank] | Use this to subscribe to your channel. You cannot subscribe on someones behalf |n.subscribe|
| `n.test`| [Blank] | Use this command to test if the bot is operational in your stream |n.test|
| `n.twitter`| [Blank] | Displays the Streamer twitter link/message |n.twitter|
| `n.twitter`| [set] | Sets the twitter command message |n.twitter set [Link]|
| `n.unsubscribe`| [Blank] | Unsubscribes from the bot. ONLY the Streamer can use this command |n.unsubscribe|
| `n.youtube`| [Blank] | Displays the Streamer youtube link/message |n.youtube|
| `n.youtube`| [set] | Sets the youtube command message |n.youtube set [Link]|

## Visual Tutorial 

- First, to start things off, you must be in a server with the bot in it. You can add it via invite [HERE](https://github.com/erwin1234777/leviathan#add-this-bot-to-your-server) or if you already have in your Discord server, ignore this step.
- Second, you must go to Twitch, either if your Streamer has the bot on their chat, or use the [Official Bot Page](https://www.twitch.tv/leviathanapp) to get started.
Thats it, those are the requirements, now follow along!

You can start by typing ``n.register`` in your Discord chat.  
 
<img src="https://i.imgur.com/0g7OQKw.png" width="320">

Second step, is going on the bot's chat or your streamers chat.
Then you'll type ``n.link``, which then the bot will DM you.
### MAKE SURE YOU HAVE DM's OPEN
Copy the whole link, ``n.link`` plus the big ID it will give you.


<img src="https://i.imgur.com/5grF3lT.png" width="680">

Once thats done, now its time to head over to Discord and paste that big link the bot DM'd you.

<img src="https://i.imgur.com/9CIY1ws.png" width="300">

### Thats it!
Remember that those steps are only for Streamers that dont have the bot on their chat. You wont be needing to come to my stream to link your account, all this can be done on the streamer's chat once the bot is setup on their end!
Well, for Users thats it. If you want the bot on YOUR stream aswell, keep following these steps!

### Add me to your stream!
Let get started. Head over to [Official Bot Page](https://www.twitch.tv/leviathanapp/chat).
Then type ``n.subscribe``. Make sure you are the Streamer, it'll subscribe to the user who types the command, you cannot subscribe on someones behalf

<img src="https://i.imgur.com/Nqqjbny.png" width="300">

That's it, the bot should be on your stream now.

Some extra things you might wanna keep in mind. Try ``n.test`` on your stream to check the bot.

<img src="https://i.imgur.com/NXZLprI.png" width="300">

You can then change the ``PREFIX`` from ``n.`` to ``!`` or whatever else you want, remember that it can ``ONLY be MAX 3 Characters long``. @Command, #Command, !Command, are all avaliable!

<img src="https://i.imgur.com/ZG3yjRv.png" width="300">

Thats it, you are done! Check the [TWITCH COMMANDS](https://github.com/erwin1234777/leviathan#twitch-commands), and try them on your stream.
No setup, no downloads, just a couple messages away from using this Free Bot! Hope you enjoy!
