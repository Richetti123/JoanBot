const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
let oi = `*👑 MENSAJE: Holi babys cómo andan está tarde estaré activa para grabar con ustedes solo avisan 😘✨* ${pesan}`
let teks = `*╭━〔 ⚡ INVOCANDO AL GRUPO ⚡ 〕━⬣*\n\n${oi}\n\n*🌟MENCIONES*\n`
for (let mem of participants) {
teks += `┃🌟 @${mem.id.split('@')[0]}\n`}
teks += `┃ atte: JoanBot\n╰━━━━━[ 😎 Version 1 ]━━━━━⬣`
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
