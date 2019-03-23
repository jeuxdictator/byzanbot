const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.TOKEN);

client.on("ready", () => {
    console.log(`connecté : ${client.user.tag}!`)
    client.user.setPresence({
        game: { 
            name: `les gens se co aux serveur !`,
            type: 'WATCHING' 
        },
        status: 'dnd' 
    })
});



client.on(`message`, message =>{
    if(message.author.id === client.user.id) return 
    if(message.channel.id === "384285377709473792"){
        if(message.content === "j'accèpte" || message.content === "j'accepte") {

            message.delete()

            let role = message.guild.roles.find(m => m.id === "558992005301141530");
            if(!role) return console.log("Le rôle n'existe pas !");

            let user = message.guild.member(message.author);
            user.addRole(role).catch(console.error);
            message.author.send(`**Bravo, tu as accepté le règlement**`);
            
        }else{
            message.delete()
            message.author.send("Veuillez envoyé `j'accèpte` dans le salon, et non autre chose")
        }
    }

});
