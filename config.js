const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "botsatwork892@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://casinobot:123johniphone@cluster0.nfztvsi.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/WHIZBOT1/WHIZBOTMD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VacWsSl3LdQOmWZrBj0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VacWsSl3LdQOmWZrBj0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/95ce6ad6559693eba92d2.jpg";
global.devs = "18763351213";
global.sudo = process.env.SUDO || "18763351213";
global.owner = process.env.OWNER_NUMBER || "18763351213";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "true",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "composing";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "24104552653";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "24104552653";
global.read_status_from = process.env.READ_STATUS_FROM || "24104552653";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU1KRkRoYVpleUxrTmVmdjJsc0lzUmp3K0svbnU0VE1wY2Nvam5xelJYcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUkZHNEkzeXRpSVNMSFR2YTRVcGEwTmVVTDNzVEdOV1JFcjhud0JrdC8wbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSlUzUmtGQWNEaG1WVk55dDBmamVWWnl5QzFMNkd1OFhWWld4RVNiQkhFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1Tzl1WUlsbXpneGN5eVRUTnEreUxKNExobEd0dUx4d0YvQmE2cUFhOUZVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlFa244eVgxNUlmVGdFT3djTlRUbFVpZjFJZTRMME9KclhBMFV6M254Rk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlV5aXp0R2xXMGFYNlNGNjFpVjE1cXVVZnAxWm5jQWRtcUJmaE84NUtVbm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUc5SkM4bnBuSUVUV2dHTFRhSS9iOWMvWWE0bit6b2w3cURPMjF5cURVST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMDRRUlNFVjlaT0Flb1RQTjdIREpOek1CTkhjbWNQb2R4QnNOVDV6VkFqMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNhSC9GaEFPYm4xY1hCZFRrT2pueS9td2srd2JhakxBQms5LzRCQjR3clNVS2k2UE9PdHRvNmJ1eEVFdFVWWU91UmJCc1M3Y1BuNnZvYzY2ZHlObmlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM1LCJhZHZTZWNyZXRLZXkiOiJQVXdJNGh3WCt2bzNyVFFaMzBWeUFyRkx5aFRyUmpsSnQ1QXplYTJJTTRZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI0MTA0NTUyNjUzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjlENDgxNjY3NDhBNjQ1QTI5QzAzN0NFQzQ5QzRCN0UwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjA5NzE5ODd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI0MTA0NTUyNjUzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkZGQTY5QUNBREIzOTQxNjc5NkE3MDE3RDNGNTBEMzRBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjA5NzE5ODd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im84NXVtY01LUUFpR2FiU0RhUGs3WWciLCJwaG9uZUlkIjoiNzBhZTM1ZTYtYmM3MC00ZjZjLWI3MmMtZGU0OGY1OTFhMDE1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNJbWp3dTEwNWMxMTdybEg5YTVjSUZSdWFCWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNeEdSdmhSWEpxajRnMGRmZElxMngycG9Xelk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTVBFWlRBM1QiLCJtZSI6eyJpZCI6IjI0MTA0NTUyNjUzOjQ4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6ImtpbmdzbGV5IiwibGlkIjoiMTEyMzk5ODE0MjkxNzAzOjQ4QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSnl3a1Y4UXYrWFB0QVlZQmlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZ09jbWtnUFJRcG8zZTZpVHZsWUoxaUFaRGZOQmxsS1Z4KzRoNFJFbHZuMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoidjRwRklJR2l5NmFTZ2VaNDV0c1gvUkJjNUYzVjlieFcwTGxlNWJUeTFRV1hJd0gwc0t6bllhd1lYclV3cjRSNlR0WEcwMzZldXFmUnZWMUVuRGlZQXc9PSIsImRldmljZVNpZ25hdHVyZSI6IjI2S1JCdncvdGZSTXBlR21FeGNCckFFd25SV2kxQ3Y3cGFxTzdydmlmUmFFS0UvVnlGdCtyRmc3a2NYZ3AzSHhFUit0bU9meGdIeHMxaHNkT3V2NWhBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjQxMDQ1NTI2NTM6NDhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWURuSnBJRDBVS2FOM3Vvazc1V0NkWWdHUTN6UVpaU2xjZnVJZUVSSmI1OSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDk3MTk4MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDQm8ifQ==
  process.env.SESSION_ID ||
  ""
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©️ 𝛲𝛩𝑊𝛯𝑅𝐷 𝐵𝑌 𝑊𝛨𝛪𝛧𝐵𝛩𝑇-𝛭𝐷",
  author: process.env.PACK_AUTHER || "WHIZBOT-ᴍᴅ",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "WHIZBOT-MD",
  ownername: process.env.OWNER_NAME || "KING BOTS",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "EyqbCCWYTc8b49cmWM0KT3BlbkFJ0NRSC7K1BiTJo3ikuriW",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "JAY").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
