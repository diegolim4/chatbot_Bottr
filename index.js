const Bottr = require('bottr')
const BottrApp = require('bottr-app')
const bot = new Bottr.Bot()

bot.on('message_received', (message, session)=> {
    session.send('Hello Word!')
})

bot.use(new BottrApp())
bot.listen()