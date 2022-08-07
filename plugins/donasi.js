let handler = async m => m.reply(`
            .✵.𝗗𝗢𝗡𝗔𝗦𝗜 𝗣𝗹𝘂𝘁𝗼𝗕𝗼𝘁.✵.
•𝗢𝗩𝗢: 085794829914
•𝗗𝗔𝗡𝗔: 083822910734
•𝗧𝗘𝗥𝗜𝗠𝗔 𝗞𝗔𝗦𝗜𝗛
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler