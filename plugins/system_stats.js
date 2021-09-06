let WhatsAlexa = require('../events');
let {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
let {spawnSync} = require('child_process');
let Config = require('../config');
let chalk = require('chalk');
let fs = require('fs');
let axios = require('axios');
let Language = require('../language');
let Lang = Language.getString('system_stats');

if (Config.WORKTYPE == 'private') {

    WhatsAlexa.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {
        
     if (Config.ALIVEMSG == 'default') {
              
                      var image = await axios.get(Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
                  await message.client.sendMessage(message.jid, Buffer.from(image.data), MessageType.image, {mimetype: Mimetype.png, contextInfo: { forwardingScore: 1000, isForwarded: true }, quoted: message.data, caption: '```💕 Hey Bro!! I am still alive & kicking 😙```\n\n*Version:* ```'+Config.VERSION+'```\n*Branch:* ```'+Config.BRANCH+'```\n\n*Developer:* TOXIC DEVIL\n\n*Git :* https://github.com/TOXIC-DEVIL/WhatsAlexa.git\n\n```💕 Thank You For Using WhatsAlexa 💞```' })
            
              } else {
              
                      var image = await axios.get(Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
                  await message.client.sendMessage(message.jid, Buffer.from(image.data), MessageType.image, {mimetype: Mimetype.png, contextInfo: { forwardingScore: 1000, isForwarded: true }, quoted: message.data, caption: Config.ALIVEMSG + '\n\n*POWERED BY WHATSALEXA, MADE BY TOXIC DEVIL*' })
              }
      }));

    WhatsAlexa.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
else if (Config.WORKTYPE == 'public') {

    WhatsAlexa.addCommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {
        
     if (Config.ALIVEMSG == 'default') {
              
                      var image = await axios.get(Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
                  await message.client.sendMessage(message.jid, Buffer.from(image.data), MessageType.image, {mimetype: Mimetype.png, contextInfo: { forwardingScore: 1000, isForwarded: true }, quoted: message.data, caption: '```💕 Hey Bro!! I am still alive & kicking 😙```\n\n*Version:* ```'+Config.VERSION+'```\n*Branch:* ```'+Config.BRANCH+'```\n\n*Developer:* TOXIC DEVIL\n\n*Git :* https://github.com/TOXIC-DEVIL/WhatsAlexa.git\n\n```💕 Thank You For Using WhatsAlexa 💞```' })
            
              } else {
              
                      var image = await axios.get(Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
                  await message.client.sendMessage(message.jid, Buffer.from(image.data), MessageType.image, {mimetype: Mimetype.png, contextInfo: { forwardingScore: 1000, isForwarded: true }, quoted: message.data, caption: Config.ALIVEMSG + '\n\n*POWERED BY WHATSALEXA, MADE BY TOXIC DEVIL*' })
              }
      }));

    WhatsAlexa.addCommand({pattern: 'sysd', fromMe: false, desc: Lang.SYSD_DESC}, (async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
