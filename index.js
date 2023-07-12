  require('dotenv').config();
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Self Bot Rich Presence working');
});
app.listen(process.env.PORT, () => {
    console.log('Self Bot Rich Presence working on port ' + process.env.PORT);
});

const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
    checkUpdate: false
});

client.on('ready', async () => {

    const rpc = new Discord.RichPresence()
        .setApplicationId('')
        .setType('')
        .setURL(``)
        .setDetails(``)
        .setName(``)
        .setParty({
            max: 1,
            current: 1,
            id: Discord.getUUID(),
        })
        .setAssetsLargeImage(``)
        .setAssetsLargeText(``)
.addButton(``, ``)
.addButton(``, ``);
    client.user.setActivity(rpc.toJSON());

    console.log(`${client.user.tag} is ready!`);
});

//Account Token
client.login(process.env.TOKEN);
