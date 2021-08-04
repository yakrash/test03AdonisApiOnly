'use strict'


/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Message = use('App/Models/Message');
const TelegrafBot = use('App/service/TelegrafBot');

class MessageController {

  async post({ request, response, view }) {
    const telegraf = new TelegrafBot();
    const messageNew = new Message();
    let { text } = request.body;
    messageNew.text = text;
    await messageNew.save();
    console.log(`add messageId ${messageNew.id} with text ${messageNew.text}`);

    telegraf.botSend(text);
    return response.json(messageNew);
  }
}

module.exports = MessageController
