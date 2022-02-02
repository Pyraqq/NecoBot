require('dotenv').config();

const { MessageEmbed } = require('discord.js'); 

const Tenor = require("tenorjs").client({
    'Key': process.env.TENOR_KEY,
    'Filter': 'off',
    'Locale': 'en_US',
    'MediaFilter': 'minimal',
    'DateFormat': 'D/MM/YYYY - H:mm:ss A'
})

module.exports ={
    name: 'hug',
    description: 'Hug someone!',
    event: 'messageEvent',
    execute(message){
        
        mentionedUser = message.mentions.users.first();

        const huggedUser = message.content.slice(6)

        if(!huggedUser) return message.reply('What, you wanna hug yourself, nya?');

        Tenor.Search.Random('anime hug', '1').then(Results =>{
            Results.forEach(Post =>{
                const hugEmbed = new MessageEmbed()
                    .setColor('RANDOM')
                    .setDescription(`${message.author.username} hugs ${huggedUser}! How wholesome... nya`)
                    .setImage(Post.media[0].gif.url)

                    console.log(Post.media[0].gif.url)

                message.channel.send({ embeds: [hugEmbed] });
            })
        })
        
        

    }
}