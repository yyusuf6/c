const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true});
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log('Pinging')
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
//growtopian
const prefix = 'c'

let quotes = [
"UYXUXYUV SA XH SXHXSBAHJXHJBHSAdfatgBXJHBSAHXBHSACGSGVSVGVXGSVGXVSGXVAGV UVVVVUVYUVUYXV XUYGBEYUXUVUX Eyvy yyyyyyyyyyyyyyyyyyyyyyygdxyw gygxbYBWvWYDBwbdhbwyud UVVXFUVyxvwvxvbhbdhhsvhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbbhbhbbhhbhbhbhbhbUYXUXYUV SA XH SXHXSBAHJXHJBHSABXJHBSAHXBHSACGSGVSVGVXGSVGXVSGXVAGV UVVVVUVYUVUYXV XUYGBEYUXUVUX Eyvy yyyyyyyyyyyyyyyyyyyyyyygdxyw gygxbYBWvWYDBwbdhbwyud UVVXFUVyxvwvxvbhbdhhsvhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbbhbhbbhhbhbhbhbhbUYXUXYUV SA XH SXHXSBAHJXHJBHSABXJHBSAHXBHSACGSGVSVGVXGSVGXVSGXVAGV UVVVVUVYUVUYXV XUYGBEYUXUVUX Eyvy yyyyyyyyyyyyyyyyyyyyyyygdxyw gygxbYBWvWYDBwbdhbwyud UVVXFUVyxvwvxvbhbdhhsvhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbbhbhbbhhbhbhbhbhbUYXUXYUV SA XH SXHXSBAHJXHJBHSABXJHBSAHXBHSACGSGVSVGVXGSVGXVSGXVAGV UVVVVUVYUVUYXV XUYGBEYUXUVUX Eyvy yyyyyyyyyyyyyyyyyyyyyyygdxyw gygxbYBWvWYDBwbdhbwyud UVVXFUVyxvwvxvbhbdhhsvhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbbhbhbbhhbhbhbhbhbUYXUXYUV",
"UYXUXYUV SA XH SXHXSBAHJXHJBHSABXJHadwaefBSAHXBHSACGSGVSVGVXGSVGXVSGXVAGV UVVVVUVYUVUYXV XUYGBEYUXUVUX Eyvy yyyyyyyyyyyyyyyyyyyyyyygdxyw gygxbYBWvWYDBwbdhbwyud UVVXFUVyxvwvxvbhbdhhsvhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbbhbhbbhhbhbhbhbhbUYXUXYUV SA XH SXHXSBAHJXHJBHSABXJHBSAHXBHSACGSGVSVGVXGSVGXVSGXVAGV UVVVVUVYUVUYXV XUYGBEYUXUVUX Eyvy yyyyyyyyyyyyyyyyyyyyyyygdxyw gygxbYBWvWYDBwbdhbwyud UVVXFUVyxvwvxvbhbdhhsvhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbbhbhbbhhbhbhbhbhbUYXUXYUV SA XH SXHXSBAHJXHJBHSABXJHBSAHXBHSACGSGVSVGVXGSVGXVSGXVAGV UVVVVUVYUVUYXV XUYGBEYUXUVUX Eyvy yyyyyyyyyyyyyyyyyyyyyyygdxyw gygxbYBWvWYDBwbdhbwyud UVVXFUVyxvwvxvbhbdhhsvhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbbhbhbbhhbhbhbhbhbUYXUXYUV SA XH SXHXSBAHJXHJBHSABXJHBSAHXBHSACGSGVSVGVXGSVGXVSGXVAGV UVVVVUVYUVUYXV XUYGBEYUXUVUX Eyvy yyyyyyyyyyyyyyyyyyyyyyygdxyw gygxbYBWvWYDBwbdhbwyud UVVXFUVyxvwvxvbhbdhhsvhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbbhbhbbhhbhbhbhbhbUYXUXYUV",
"UYXUXYUV SA XH SXHXSBAHJXHJBHSABXJHBSAHXBtgrjxtgjnrshHSACGSGVSVGVXGSVGXVSGXVAGV UVVVVUVYUVUYXV XUYGBEYUXUVUX Eyvy yyyyyyyyyyyyyyyyyyyyyyygdxyw gygxbYBWvWYDBwbdhbwyud UVVXFUVyxvwvxvbhbdhhsvhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbbhbhbbhhbhbhbhbhbUYXUXYUV SA XH SXHXSBAHJXHJBHSABXJHBSAHXBHSACGSGVSVGVXGSVGXVSGXVAGV UVVVVUVYUVUYXV XUYGBEYUXUVUX Eyvy yyyyyyyyyyyyyyyyyyyyyyygdxyw gygxbYBWvWYDBwbdhbwyud UVVXFUVyxvwvxvbhbdhhsvhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbbhbhbbhhbhbhbhbhbUYXUXYUV SA XH SXHXSBAHJXHJBHSABXJHBSAHXBHSACGSGVSVGVXGSVGXVSGXVAGV UVVVVUVYUVUYXV XUYGBEYUXUVUX Eyvy yyyyyyyyyyyyyyyyyyyyyyygdxyw gygxbYBWvWYDBwbdhbwyud UVVXFUVyxvwvxvbhbdhhsvhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbbhbhbbhhbhbhbhbhbUYXUXYUV SA XH SXHXSBAHJXHJBHSABXJHBSAHXBHSACGSGVSVGVXGSVGXVSGXVAGV UVVVVUVYUVUYXV XUYGBEYUXUVUX Eyvy yyyyyyyyyyyyyyyyyyyyyyygdxyw gygxbYBWvWYDBwbdhbwyud UVVXFUVyxvwvxvbhbdhhsvhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbbhbhbbhhbhbhbhbhbUYXUXYUV",
"UYXUXYUV SA XH SXHXSBAHJXHJBHSABsdXJHBSAHrtj6dtyjXBHSACGSGVSVGVXGSVGXVSGXVAGV UVVVVUVYUVUYXV XUYGBEYUXUVUX Eyvy yyyyyyyyyyyyyyyyyyyyyyygdxyw gygxbYBWvWYDBwbdhbwyud UVVXFUVyxvwvxvbhbdhhsvhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbbhbhbbhhbhbhbhbhbUYXUXYUV SA XH SXHXSBAHJXHJBHSABXJHBSAHXBHSACGSGVSVGVXGSVGXVSGXVAGV UVVVVUVYUVUYXV XUYGBEYUXUVUX Eyvy yyyyyyyyyyyyyyyyyyyyyyygdxyw gygxbYBWvWYDBwbdhbwyud UVVXFUVyxvwvxvbhbdhhsvhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbbhbhbbhhbhbhbhbhbUYXUXYUV SA XH SXHXSBAHJXHJBHSABXJHBSAHXBHSACGSGVSVGVXGSVGXVSGXVAGV UVVVVUVYUVUYXV XUYGBEYUXUVUX Eyvy yyyyyyyyyyyyyyyyyyyyyyygdxyw gygxbYBWvWYDBwbdhbwyud UVVXFUVyxvwvxvbhbdhhsvhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbbhbhbbhhbhbhbhbhbUYXUXYUV SA XH SXHXSBAHJXHJBHSABXJHBSAHXBHSACGSGVSVGVXGSVGXVSGXVAGV UVVVVUVYUVUYXV XUYGBEYUXUVUX Eyvy yyyyyyyyyyyyyyyyyyyyyyygdxyw gygxbYBWvWYDBwbdhbwyud UVVXFUVyxvwvxvbhbdhhsvhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbbhbhbbhhbhbhbhbhbUYXUXYUV",
"UYXUXYUV SA XH SXHXSBAHJXHJBHSABXJHBSAHXBHStrgjytnbACGSGVSVGVXGSVGXVSGXVAGV UVVVVUVYUVUYXV XUYGBEYUXUVUX Eyvy yyyyyyyyyyyyyyyyyyyyyyygdxyw gygxbYBWvWYDBwbdhbwyud UVVXFUVyxvwvxvbhbdhhsvhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbbhbhbbhhbhbhbhbhbUYXUXYUV SA XH SXHXSBAHJXHJBHSABXJHBSAHXBHSACGSGVSVGVXGSVGXVSGXVAGV UVVVVUVYUVUYXV XUYGBEYUXUVUX Eyvy yyyyyyyyyyyyyyyyyyyyyyygdxyw gygxbYBWvWYDBwbdhbwyud UVVXFUVyxvwvxvbhbdhhsvhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbbhbhbbhhbhbhbhbhbUYXUXYUV SA XH SXHXSBAHJXHJBHSABXJHBSAHXBHSACGSGVSVGVXGSVGXVSGXVAGV UVVVVUVYUVUYXV XUYGBEYUXUVUX Eyvy yyyyyyyyyyyyyyyyyyyyyyygdxyw gygxbYBWvWYDBwbdhbwyud UVVXFUVyxvwvxvbhbdhhsvhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbbhbhbbhhbhbhbhbhbUYXUXYUV SA XH SXHXSBAHJXHJBHSABXJHBSAHXBHSACGSGVSVGVXGSVGXVSGXVAGV UVVVVUVYUVUYXV XUYGBEYUXUVUX Eyvy yyyyyyyyyyyyyyyyyyyyyyygdxyw gygxbYBWvWYDBwbdhbwyud UVVXFUVyxvwvxvbhbdhhsvhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbhbbhbhbbhhbhbhbhbhbUYXUXYUV"
];
let kantor = [
"769592304406626324",
"769924035559030794",
"769924066885894196",
"769924097567490048",
"769924155730427944",
"769924203120951317",
"769939501954891787",
"769940059465842738",
"769940140071059456",
"769940175321038918",
"769940461116588043",
"769940509497491467",
"769940534008479755",
"769940566052962334",
"769940593333370900",
];

let result = Math.floor((Math.random() * quotes.length));
let bisnis = Math.floor((Math.random() * kantor.length));

setInterval(() => {
  client.channels.get(kantor[bisnis]).send(quotes[result]).then(msg => msg.delete(1000));
}, 3000);

client.on('message', async message => {
  
if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  
  let msg = message.content.toLowerCase();
  let args = message.content.slice(prefix.length).trim().split(" ");
  let cmd = args.shift().toLowerCase();
  let {cooldown} = require("./cooldown.js")
  let commandcooldown = cooldown;
  
if(!message.content.startsWith(prefix)) return undefined;
  
  if(!msg.startsWith(prefix)) return;
  if(commandcooldown.has(message.author.id)) {
    
   return;
    
  }
  commandcooldown.add(message.author.id);
  setTimeout(() => {
    commandcooldown.delete(message.author.id)
  }, 100);
  
  try {
    let commandFile = require(`./cmds/${cmd}.js`);
   commandFile.run(client, message, args);
  } catch(e) {
    
  } finally {
    console.log(`hey, ${message.author.tag} telah menggunakan command: ${cmd}`);
    
  }

});

client.login(process.env.TOKEN);

client.on("ready", async () => {
    console.log(`Logged in as : ${client.user.tag}`);
    console.log(`${client.user.tag} is ready!`)
});
 
