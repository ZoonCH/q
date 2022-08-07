let handler = async m => m.reply(`
            𝐧𝐲𝐚𝐫𝐢 𝐬𝐜𝐫𝐢𝐩𝐭 𝐧𝐲𝐚 𝐲𝐚𝐚𝐚..
`.trim()) //

handler.customPrefix = /^(.sc|.script|sc|script)$/i
handler.command = new RegExp

handler.limit = false
handler.mods = false 
module.exports = handler