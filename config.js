const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="lovianshavanga7@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254795001271";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "composing " ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_10_04_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMCxcbiAgICAgICAgMTMyLFxuICAgICAgICA1NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDczLFxuICAgICAgICAxMTcsXG4gICAgICAgIDY1LFxuICAgICAgICAxNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDg1LFxuICAgICAgICAyNixcbiAgICAgICAgODYsXG4gICAgICAgIDQ1LFxuICAgICAgICA0MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDM1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzLFxuICAgICAgICAxODksXG4gICAgICAgIDI5LFxuICAgICAgICA5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDUzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTcwLFxuICAgICAgICA4NixcbiAgICAgICAgMTY1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTU4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDUzLFxuICAgICAgICAxODYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjIsXG4gICAgICAgIDYxLFxuICAgICAgICA4NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAzOSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDU5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODgsXG4gICAgICAgIDc4LFxuICAgICAgICA1MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE3LFxuICAgICAgICA4NyxcbiAgICAgICAgODAsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjUsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDksXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5LFxuICAgICAgICA0MCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0NixcbiAgICAgICAgOTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjYsXG4gICAgICAgIDEwNixcbiAgICAgICAgOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjYsXG4gICAgICAgIDM0LFxuICAgICAgICAzNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAzNixcbiAgICAgICAgMTU5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODQsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjksXG4gICAgICAgIDk0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMwLFxuICAgICAgICA1NixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzksXG4gICAgICAgIDMyLFxuICAgICAgICA1OCxcbiAgICAgICAgMixcbiAgICAgICAgMjgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzksXG4gICAgICAgIDM1LFxuICAgICAgICAyMixcbiAgICAgICAgMjAxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTE2LFxuICAgICAgICA5MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxODcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzcsXG4gICAgICAgIDkwLFxuICAgICAgICA4OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJUZDJXUHduY1pieFM5eTNaR3FzbFhVV2hIWHZBSTY4WlI2aEE3Zks1Z3JJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJnT0JEckxjNFJibWtmaGtjWTBfNnVBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjIwNjNiNzQ0LTExODctNDU1Ny05MDc4LWQwMmZhZDFkYzI5MVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTAsXG4gICAgICA0NCxcbiAgICAgIDIwNixcbiAgICAgIDE0OCxcbiAgICAgIDE2NixcbiAgICAgIDQxLFxuICAgICAgMjM1LFxuICAgICAgNCxcbiAgICAgIDgsXG4gICAgICAxNTMsXG4gICAgICAyMDcsXG4gICAgICAxODIsXG4gICAgICAyMzcsXG4gICAgICAxNDUsXG4gICAgICA0OCxcbiAgICAgIDE3NyxcbiAgICAgIDg4LFxuICAgICAgMTQ5LFxuICAgICAgMTc1LFxuICAgICAgMTY3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MixcbiAgICAgIDY0LFxuICAgICAgMTEwLFxuICAgICAgMjI5LFxuICAgICAgMTYsXG4gICAgICAxOTEsXG4gICAgICAxMixcbiAgICAgIDE0MCxcbiAgICAgIDE1NixcbiAgICAgIDIxMSxcbiAgICAgIDI0MCxcbiAgICAgIDIsXG4gICAgICA1NixcbiAgICAgIDEwMyxcbiAgICAgIDI1MCxcbiAgICAgIDE0OSxcbiAgICAgIDgwLFxuICAgICAgMTQ3LFxuICAgICAgNTUsXG4gICAgICAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlQ5N0w2NTRIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3MDk1MjEwNjM6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQ5OTIwODc0NzA1MTI2OjE0QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIuKCm+KCnOKCkeG1peKCkeKCmVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ095VGdiTUZFSXZ1ajdFR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidytPdFNJdVBjODJ4VHVobUx5Yyt3WUVzM3RGOGptRFAwNTROUDdaekpnRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJBdUs4bk1BSHBpKzVDajBXWHU3MHRaYkE4NWJ2bGRHdDhXQitrcm10VmNBbFNPOTdwUm83UHprL29HR3Yzeko3TmFzeHpaRDRtNkh4cC9EbWxoQXhEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJaU1UwNWQrSjFjK3BJckxDUHQrOXBNVjU4dmlraXpWY1d2bDI4UkNydXRTRUh2NktsbE9xeCsxSWJNYTJPcjBiT0o3WFd3M0xRM2puMkdjU3dLNDVBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTY3MDk1MjEwNjM6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTM2MzMwNDAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPSzVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9LNS5qc29uIjogIntcImtleURhdGFcIjpcIkZydVQzRHlXRG1QeWltUkttRktjbThJNHRvY29yZnB1ZVZMZ0Fvc0NTR1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ0OTE1MDk1NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzEzNTg1NjMxMDA0XCJ9Igp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "lovean-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x lovean",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-8255151a-4382-48a4-9e51-2bd8d6217528",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "lovean"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "true",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
