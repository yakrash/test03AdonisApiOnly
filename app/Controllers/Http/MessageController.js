'use strict'


/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with messages
 */

const Message = use('App/Models/Message');
const TelegrafBot = use('App/service/TelegrafBot');
const telegraf = new TelegrafBot();

class MessageController {
  constructor() {
    console.log('MessageController')
  }
  /**
   * Show a list of all messages.
   * GET messages
   */
  
  async index ({ request, response, view }) {
    return await Message.all();
  }

  async getById ({ request, response, view }) {
    console.info(`getById ${request.params.id}`);
    return await Message.find(request.params.id);
  }

  /**
   * Render a form to be used for creating a new message.
   * GET messages/create
   */
  async post ({ request, response, view }) {
    
    const messageNew = new Message();
    let {text} = request.body;
    messageNew.text = text;
    await messageNew.save();
    console.log(`add messageId ${messageNew.id} with text ${messageNew.text}`);

    telegraf.botSend(text);
    return response.json(messageNew);
  }

  /**
   * Create/save a new message.
   * POST messages
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single message.
   * GET messages/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing message.
   * GET messages/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update message details.
   * PUT or PATCH messages/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a message with id.
   * DELETE messages/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = MessageController
