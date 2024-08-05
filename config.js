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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, 254741749876') : "923184474176";




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
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,254741749876";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_23_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDM0LFxuICAgICAgICAzMixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOSxcbiAgICAgICAgMTI0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAzNixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTksXG4gICAgICAgIDcxLFxuICAgICAgICAyMjksXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTAwLFxuICAgICAgICAzMixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDkwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDksXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDUsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExNixcbiAgICAgICAgMzksXG4gICAgICAgIDU3LFxuICAgICAgICA1MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTE4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODEsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTksXG4gICAgICAgIDAsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOSxcbiAgICAgICAgODAsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDgzLFxuICAgICAgICAzMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNixcbiAgICAgICAgNDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDkwLFxuICAgICAgICA1MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTk4LFxuICAgICAgICA2MixcbiAgICAgICAgMjMwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDU5LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTcsXG4gICAgICAgIDc1LFxuICAgICAgICA3OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDU4LFxuICAgICAgICA3NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE5LFxuICAgICAgICA3MSxcbiAgICAgICAgNSxcbiAgICAgICAgOTksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0LFxuICAgICAgICA2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTMxLFxuICAgICAgICA0LFxuICAgICAgICAxOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDM1LFxuICAgICAgICA5NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNCxcbiAgICAgICAgMzksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA5MixcbiAgICAgICAgNDAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAzNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDkxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTYwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTEyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI2LFxuICAgICAgICA3NCxcbiAgICAgICAgMjA0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjksXG4gICAgICAgIDE2LFxuICAgICAgICA4NixcbiAgICAgICAgNzgsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTg0LFxuICAgICAgICA1MixcbiAgICAgICAgODMsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkw3YmNsU1U0QVdjZENxYmU2aTdpTTZOVjYxNGtnbUZNVXJSL2V4bHg3TkU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInl4a0pUUmZTU0NtcjNWYnR0c1BpY1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiY2E3MGRjYmQtZmY5YS00NTMyLTgxODctNDg4MzIzYjA1MWVhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MyxcbiAgICAgIDEyOCxcbiAgICAgIDEyNCxcbiAgICAgIDIzOCxcbiAgICAgIDcsXG4gICAgICAxMDUsXG4gICAgICAyMjEsXG4gICAgICA3LFxuICAgICAgMTYyLFxuICAgICAgNzgsXG4gICAgICAxMzAsXG4gICAgICA5OCxcbiAgICAgIDE2MCxcbiAgICAgIDExNyxcbiAgICAgIDE3OSxcbiAgICAgIDM5LFxuICAgICAgMjM1LFxuICAgICAgNzcsXG4gICAgICAxNjAsXG4gICAgICAxODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUwLFxuICAgICAgMjI4LFxuICAgICAgMjQyLFxuICAgICAgMzAsXG4gICAgICAxNjIsXG4gICAgICAxMjksXG4gICAgICA5MSxcbiAgICAgIDEzNSxcbiAgICAgIDU1LFxuICAgICAgNjUsXG4gICAgICA1LFxuICAgICAgMTQyLFxuICAgICAgMjQzLFxuICAgICAgMjUxLFxuICAgICAgMjgsXG4gICAgICAxMDEsXG4gICAgICAyNTMsXG4gICAgICA0NCxcbiAgICAgIDE0MixcbiAgICAgIDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSjJQNk5aRTNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc0MTc0OTg3Njo2N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQzNDc4MDEzMDU5MTc5OjY3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09MRDg3NEJFS09nbjdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidmxKclJ5bGt6bXNTSkZVeFQyLy9LTE5GMmJKVzhReE54TVJxRWt5MFJ6bz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJzRlJ4b2pRM3Q1a1NKM3lVcWlBVENnOEtodms4SDhhK3JQNHFsVnIyQ2UwY0Z2d2NxUDhnTGRkN2d5ZUVvZUI2SHE5a2E0U1lZYVB6eHdJYUJ3ZVhDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJPSlB6NW1HOGpUbnk1RTZpZjJONEF6SjBVeFRUTmMyenkrVDNnQTh6SE5Fa0prT0RDaGtDaDZVeFpPZjFNbHNWNkE0Q2puOEZjTzRlVmdvZDIySWxEQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NDE3NDk4NzY6NjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA1OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMjczODMyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "lewi",
  ownername:process.env.OWNER_NAME|| "lewi",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
