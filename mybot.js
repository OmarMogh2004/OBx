const Discord = require('discord.js');

const moment = require("moment");  

const fs = require("fs");      

const dateFormat = require('dateformat');

const client = new Discord.Client(); 

const Canvas = require("canvas"); //npm i canvas

const prefix ="$" // برفكس

let profile = JSON.parse(fs.readFileSync("profile.json", "utf8"))


bot.on('ready', () => {

	console.log("Turning on Bot")	bot.user.setActivity("New Users",     {type: 2});

});

bot.on('guildMemberAdd', member => {

	let channel = member.guild.channels.find('name', 'obx');

	let memberavatar = member.user.avatarURL

	if (!channel) return;

	let embed = new Discord.RichEmbed()

	.setcolor('RANDOM')

	.setThumbnail("memberavatar")

	.addField(':busts_in_silhouette:    |     name : ',    `${member}`)

	.addField(':microphone:    |    Welcome!',    `**Wellllcoome To ___OBx Shop____ 💞 💝**, ${member}`)

	.addField(':id: | user :', "**[" + `${member.id}` + "]**")

	.addField(':family_mwgb:    |   Your the member',    `${member.guild.memberCount}`)

	.addField("Name", `<@` + `${member.id}` + ">",   true)

	.addField('Server', `${member.guild.name}`,    true)

	.setFooter(`**${member.guild.name}**`)

	.setTimestamp()

	

	message.channel.send({embed});

});

bot.on('guildMemberAdd',   member => {

	

	console.log(`${member}`, "has joined" + `${message.guild.name}`)؛

	

});

client.on("ready", async  => {

setInterval(function(){

client.channels.get("529241607573340170").setName("[");

client.channels.get("529241607573340170").setName("[ Wel");

client.channels.get("529241607573340170").setName("[ Welcome");

client.channels.get("529241607573340170").setName("[ Welcome To");

client.channels.get("529241607573340170").setName("[ Welcome To OB");

client.channels.get("529241607573340170").setName("[ Welcome To OBx");

client.channels.get("529241607573340170").setName("[ Welcome To OBx Sh");

client.channels.get("529241607573340170").setName("[ Welcome To OBx Shop");

client.channels.get("529241607573340170").setName("[ Welcome To OBx Shop ]");

  }, 3000);

});

const token = pocess.env.TOKEN;

bot.login("NTMwMzY5NjQ0MDMzMjEyNDE2.Dw-aMQ.D_S19i5VDrZnAD7lJeopT5ClcfI");

    
