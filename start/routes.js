
'use strict'

const MessageController = require('../app/Controllers/Http/MessageController').default

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.get('/', 'MessageController.index')
  Route.get('/:id', 'MessageController.getById')
  Route.post('/', 'MessageController.post')
}).prefix('rest')