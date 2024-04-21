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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254795001271";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_47_04_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTg1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzksXG4gICAgICAgIDczLFxuICAgICAgICAxMzcsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDgyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODAsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTY5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE4LFxuICAgICAgICA3NSxcbiAgICAgICAgODEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTcxLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTYxLFxuICAgICAgICA0NixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDMyLFxuICAgICAgICA5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDUsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDk2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDk1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDgyLFxuICAgICAgICAxNCxcbiAgICAgICAgODgsXG4gICAgICAgIDY0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDYzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3NixcbiAgICAgICAgNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0LFxuICAgICAgICA5LFxuICAgICAgICAxMzksXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDUxLFxuICAgICAgICA0NSxcbiAgICAgICAgOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0LFxuICAgICAgICA1OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDcsXG4gICAgICAgIDgxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTI2LFxuICAgICAgICA5NCxcbiAgICAgICAgODUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDgsXG4gICAgICAgIDQ5LFxuICAgICAgICA3MCxcbiAgICAgICAgODcsXG4gICAgICAgIDQ2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQyLFxuICAgICAgICA4MixcbiAgICAgICAgNzIsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjMsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTk0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTM2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDksXG4gICAgICAgIDkyLFxuICAgICAgICA5NixcbiAgICAgICAgMjI2LFxuICAgICAgICA3NSxcbiAgICAgICAgMjM2LFxuICAgICAgICA5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTk1LFxuICAgICAgICA5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTEzLFxuICAgICAgICA1MSxcbiAgICAgICAgODIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTjZ2cU5BcW9HbTRTWTVUbnNKSG9ub3R2dWEvU2JEU240TmRQekdRZHZrMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRWJPTFR6UmpTVHlaOURYVGxmMHN0d1wiLFxuICBcInBob25lSWRcIjogXCIzYWFiZWE0Yy0zOWUxLTRiNTktYmNmYy00YTJlZDhiMWQxOTlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQyLFxuICAgICAgMjM5LFxuICAgICAgMTQ1LFxuICAgICAgMjYsXG4gICAgICAxOTgsXG4gICAgICAxMTcsXG4gICAgICA3MSxcbiAgICAgIDE4LFxuICAgICAgMTgxLFxuICAgICAgMjA2LFxuICAgICAgMjQxLFxuICAgICAgOTYsXG4gICAgICAyNDYsXG4gICAgICA0MSxcbiAgICAgIDIwOSxcbiAgICAgIDYwLFxuICAgICAgMTc4LFxuICAgICAgMTksXG4gICAgICAyNDcsXG4gICAgICAyMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg2LFxuICAgICAgMTY1LFxuICAgICAgMTE4LFxuICAgICAgMTk4LFxuICAgICAgMjQ1LFxuICAgICAgMTQsXG4gICAgICA1MyxcbiAgICAgIDU3LFxuICAgICAgMjA5LFxuICAgICAgMTQwLFxuICAgICAgMTgxLFxuICAgICAgMjQyLFxuICAgICAgMSxcbiAgICAgIDIzLFxuICAgICAgMjQwLFxuICAgICAgNDgsXG4gICAgICAxNDgsXG4gICAgICAyMjIsXG4gICAgICAyMjEsXG4gICAgICAxOThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRkY0MlREQjdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NjcwOTUyMTA2MzoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDk5MjA4NzQ3MDUxMjY6MTVAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiXyTDo21cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPMlRnYk1GRUtIOGtiRUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIncrT3RTSXVQYzgyeFR1aG1MeWMrd1lFczN0RjhqbURQMDU0TlA3WnpKZ0U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOVRmUEdOa2p1R3QxVk9xNUpjU3dFVnJlM1Z6dlRobDJpVGkxQ0w0QnQ0d09Ndm9YR1BUOGd2Z1pGR3RpMDZPWkh2NDAvMU9SN1NpNGphUThJcGN5QkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVitnM3lQUWZJbW5jaitWQTdQYWUzdUlLaXE5U3FyOXY1cHYySDZWQ3NYbTJJbXB6QWZFbW5RSnRVZmZHNWNUUERJZ1Vzak1LYzRaQWsvOVh3cWNXaUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU2NzA5NTIxMDYzOjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzEzNjY3NjIxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRG54XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEbnguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ4SDVtaGNCQW9jUWJUaFIzNURUY2pMaDJzNFFNVkozNXVkYzA0SDVUT2s4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NDkxNTA5NTcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxMzY2NzYyNTc0NlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
