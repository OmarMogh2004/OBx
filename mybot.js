const Discord = require("discord.js");

  const OBx = new Discord.Client();

    const OBxtoken = "NTMwMzY5NjQ0MDMzMjEyNDE2.Dw-aMQ.D_S19i5VDrZnAD7lJeopT5ClcfI"

      kboosh.on('ready', () => {

        kboosh.user.setGame(`KBOOSH TEST Broadcast`,'https://www.twitch.tv/TEST-Broadcast');

          console.log('Im Ready!');

  

        });

  kboosh.on('message', message => {

    if (message.content.split(' ')[0] == '$bc')

       message.guild.members.forEach( member => {

         if (!message.member.hasPermission("ADMINISTRATOR"))  return;

           member.send( `${member} ! ` + "**" + message.guild.name + " : ** " + message.content.substr(3));

                                                      message.delete();

            

                                                    });

            

                                                  });

   kboosh.on("message", message => {

       var prefix = "$";

 

             var args = message.content.substring(prefix.length).split(" ");

                if (message.content.startsWith(prefix + "abc")) {

                          if (!message.member.hasPermission("ADMINISTRATOR"))  return;

                          if (!args[1]) {

                            

                                 let embed3 = new Discord.RichEmbed()

                                     .setDescription(":white_check_mark: | تم ارسال رسالة لا يوجد فيها شيء")

                                       .setColor("#FF00FF")

                                          message.channel.sendEmbed(embed3);

                            

                                        } else {

                            

                                           let embed4 = new Discord.RichEmbed()

                                                            .setDescription(':white_check_mark: | تم ارسال الرساله للجميع ..')

                                                                .setColor("#99999")

                               

                                                                message.channel.sendEmbed(embed4);

                                                      message.delete();

                            }

                          }

});

obx.login("NTMwMzY5NjQ0MDMzMjEyNDE2.Dw-aMQ.D_S19i5VDrZnAD7lJeopT5ClcfI");

