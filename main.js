// token from dotenv
require('dotenv').config();

// Preparing to connect to discord api
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
]});

// when message is sent on discord
client.on('messageCreate', async function(message){
    try{
        if(message.author.bot) return;
        // message reply using hibot function
        if (message.content == 'hi bot'){
            message.reply('Hi ' + message.author.username);
        }
        if (message.content == 'bot pls img'){
            //send image and say 'its your image'
            message.reply('its your image');
            message.channel.send({files: ['https://i.imgur.com/IPxnIgv.jpeg']});
        }
        return;
    }
    catch(err){
        console.log(err);
    }
});

// login to discord as bot
client.login(process.env.DISCORD_TOKEN);
console.log('Bot is running');
