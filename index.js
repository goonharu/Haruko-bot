const Discord = require("discord.js")

const TOKEN = "OTM2NjE1NDE1NDMyNDk5Mjcx.YfPxFA.kwAsqtvXW3Qq1RuQQVvj916MCPc"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello!")
    }
    if (message.content == "bye"){
        message.reply("Bye!")
    }
})

client.login(TOKEN)