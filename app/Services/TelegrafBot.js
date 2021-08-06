const { Telegraf } = require('telegraf');

class TelegrafBot {
    constructor(token) {
        this.bot = new Telegraf(token);
    }

    async botSend(msg) {
        await this.bot.telegram.sendMessage(236870885, msg);
    }
    static _this = null;
    static async init(token) {
        if (!TelegrafBot._this) {
            TelegrafBot._this = new TelegrafBot(token);

            TelegrafBot._this.bot.start(ctx => {
                ctx.reply("Hello");
            });

            await TelegrafBot._this.bot.launch();
            console.log('Bot started');
        }
        return TelegrafBot._this;
    }
}

module.exports = TelegrafBot;