const { Telegraf } = require('telegraf')

const bot = new Telegraf('1896607026:AAHwZLY86PvMrZXm9svoHbEpJbq7vo9csFo');

class TelegrafBot {
    constructor() {
        bot.start(ctx => {
            ctx.reply("Hello");
        });
        bot.launch()
            .then((res) => {
                console.log('Bot started');
            })
            .catch((error) => {
                console.log(error);
            })
    }
    
    botSend(msg) {
        bot.telegram.sendMessage(236870885, msg);
    }
}

module.exports = TelegrafBot;