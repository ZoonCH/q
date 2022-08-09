const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m) => {
let sewa = `*────── 「 LIST SEWA 」 ──────*

Hai 👋

┏━━━•❅•°•❈〔 𝙄𝙣𝙫𝙞𝙩𝙚 𝘽𝙤𝙩 〕
┣★ミ 𝘾𝙪𝙠𝙪𝙥 𝙎𝙪𝙗𝙨𝙘𝙧𝙞𝙗𝙚 𝘾𝙝𝙖𝙣𝙚𝙡 
┣★ミ https://youtube.com/channel/UCjzlh0Uhz8KJYZnZ0BVN35w
┣★ミ 𝙇𝙖𝙡𝙪 𝘾𝙝𝙖𝙩 𝙣𝙤𝙢𝙤𝙧
┣★ミ http://wa.me/6283822910734?text=SAYA+SUDAH+SUBSCRIBE
┗━━━•❅•°•❈

┏━━━•❅•°•❈〔 𝐋𝐢𝐬𝐭 𝐔𝐩𝐠𝐫𝐚𝐝𝐞 𝐏𝐫𝐞𝐦𝐢𝐮𝐦 〕
┣★ミ Premium : 10k/1 Bulan
┣★ミ Premium : 15k/2 bulan
┣★ミ Premium : 25k/Permanent
┗━━━•❅•°•❈

┏━━━•❅•°•❈𝐊𝐞𝐮𝐧𝐭𝐮𝐧𝐠𝐚𝐧 𝐌𝐞𝐦𝐛𝐞𝐫 𝐏𝐫𝐞𝐦𝐢𝐮𝐦
┣➲ Unlock Fitur Premium
┣➲ limit didapat tiap hari dengan claim
┣➲ bisa invite bot ke grup
┗━━━•❅•°•❈
Contact person Owner:
wa.me/6283822910734 (Owner)`
let message = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/be846df6f07d9a9909861.jpg' }}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: sewa,
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: 'Group PlutoBot',
               url: 'https://chat.whatsapp.com/CDHRtY4JP2TD1XpF96wQLR'
             }

           },
               {
             callButton: {
               displayText: 'No Owner',
               phoneNumber: '+62 838-2291-0734'
             }
           },           
               {
             quickReplyButton: {
               displayText: '🧒 Owner',
               id: '.owner',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.help = ['sewa']
handler.tags = ['donasi']
handler.command = /^sewa$/i

module.exports = handler
