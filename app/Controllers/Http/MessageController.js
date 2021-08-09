'use strict'


/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Message = use('App/Models/Message');
const TelegrafBot = use('App/Services/TelegrafBot');
const Env = use('Env');

class MessageController {

  async post({ request, response }) {
    const bot = await TelegrafBot.init(Env.get('TELEG_TOKEN'));

    const messageNew = new Message();
    let { text } = request.body;
    messageNew.text = text;

    await bot.botSend(text);

    await messageNew.save();
    console.log(`add messageId ${messageNew.id} with text ${messageNew.text}`);
    return response.json(messageNew);
  }

  async index ({ request, response, view }) {
    return await Message.all();
  }
}

module.exports = MessageController
