const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254741749876";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254741749876,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_52_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDgyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjM4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNixcbiAgICAgICAgMjYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDY1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTUyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDc3LFxuICAgICAgICA3LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTksXG4gICAgICAgIDI5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDUsXG4gICAgICAgIDI5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTE0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDUyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTcyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTUzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgNTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE3LFxuICAgICAgICA5NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDU1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDMzLFxuICAgICAgICA5NCxcbiAgICAgICAgODYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0NixcbiAgICAgICAgNjcsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDY5LFxuICAgICAgICA1OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzksXG4gICAgICAgIDIwNSxcbiAgICAgICAgODcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDU4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTg5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTUzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg5LFxuICAgICAgICA3NixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDM0LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUTJ4b0VTNGFrZ2JmYUhyZnhGTkR1enJOd1NITFpGUEcwNlkySkFxM0gzVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieE1UWTA3bm9RSHVqOXozYmRGNm14d1wiLFxuICBcInBob25lSWRcIjogXCI4NjA0ZGRmMC00NDgxLTQ0MWYtOTcyMi1lMDFlOWMyMjgyMmNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUxLFxuICAgICAgMjE5LFxuICAgICAgMTY3LFxuICAgICAgOTUsXG4gICAgICAxNixcbiAgICAgIDE5MSxcbiAgICAgIDIsXG4gICAgICAzMixcbiAgICAgIDEzLFxuICAgICAgMTI1LFxuICAgICAgMTIyLFxuICAgICAgMTE3LFxuICAgICAgMTM0LFxuICAgICAgMTUxLFxuICAgICAgOTMsXG4gICAgICA5MSxcbiAgICAgIDIzMCxcbiAgICAgIDE1LFxuICAgICAgMTU2LFxuICAgICAgMTEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1OCxcbiAgICAgIDE2OCxcbiAgICAgIDE3NixcbiAgICAgIDIyNCxcbiAgICAgIDgwLFxuICAgICAgMjUsXG4gICAgICAxNDAsXG4gICAgICA4LFxuICAgICAgODIsXG4gICAgICAxMDksXG4gICAgICAyNTUsXG4gICAgICAxMDQsXG4gICAgICAyMzksXG4gICAgICAxNzQsXG4gICAgICAxNzIsXG4gICAgICAxMzYsXG4gICAgICAxMTUsXG4gICAgICAxOTgsXG4gICAgICAyNDgsXG4gICAgICAxODdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWkpCWjdMOFRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc0MTc0OTg3Njo1NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQzNDc4MDEzMDU5MTc5OjU0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tEUnp1d0JFTmZXNzdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiM25jUUFmL0puNTFNb0k0RUZCK09oMURqUjRrNm1VamRud01ZOGRSb0Vscz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJWL0pVWnpzbnZXL3k5WnFmRWU0NTRwQ21YcGhiM2xvTzRLbkJCa3U1UFp3R0F5NVl6NWZPUUltcmZpbWpQSzJPWXRTNXR6UitLUDVqUks2M01UZ0hEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ5U295VldQOVYyN1crT2IzNlppNzE1cHpnbnB2N0hveHFwTWsrSXlBNFhpNlVtN1JxOGRSSG43NHJLOUI0S2dNeURLZC91WlFvSCsxL2JRTUljRFVEQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NDE3NDk4NzY6NTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNDk0MzY1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "scheme", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "LEWI",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Lewi",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : Process.env.KOYEB_API  || "false",

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
 
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  |
