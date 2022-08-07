let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
let kasar = fs.readFileSync('./mp3/toxic.opus') 
conn.sendFile(m.chat, kasar, '', '', m, true)
}

handler.customPrefix = /^(asu|bangsat|babi|anjing|anjim|bokep|setan)$/i
handler.command = new RegExp

handler.limit = 1
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

module.exports = handler
