let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Smatfren [088233832771]
│ • Tri [089612698583]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Dana [088233832771]
│ • Ingin Donasi Hubungi Owner:https://bit.ly/3qdDHsX
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
