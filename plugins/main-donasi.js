const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m) => {
let krizyn = `
Hallo User DaniBotz π
*Kalian Bisa Mendukung Saya Agar Bot Ini Tetap Up To Date Dengan Cra:*

β­ββ *γ DONASI γ*
β βͺ Dana : 081251549899
β βͺ Gopay : 081352848936
β βͺ Ovo : 081352848946
β°ββββββββββββββββ

BERAPAPUN DONASI KALIAN AKAN SANGAT BERARTI π
TERIMAKASIH  BUAT YANG SUDAH MAU BERDONASIπ
	`.trim()
  let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(donasi)).buffer()}, { upload: conn.waUploadToServer }) 
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: krizyn,
                imageMessage: message.imageMessage, 
           hydratedFooterText: 'π₯ Silahkan pilih Command Dibawah ini',
           hydratedButtons: [{
             urlButton: {
               displayText: 'My YoutubeπΈ',
               url: 'https://youtube.com/channel/UCoHJ9D9Sy3TLp0mUHBrj1cg',
             }

           },
                {
               urlButton: {
               displayText: 'πΌOwner DaniBotz',
               url: nomer
             }

           },
               {
             quickReplyButton: {
               displayText: 'sewa',
               id: '.sewadani',
             }
             
           },
               {
             quickReplyButton: {
               displayText: 'Menu',
               id: '.menu',
             }
             
             },
               {
             quickReplyButton: {
               displayText: 'Runtime',
               id: '.runtime',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.tags = ['main', 'info']
handler.command = /^(donasi|donate)$/i
handler.help = ['donasi']
module.exports = handler