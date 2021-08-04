
'use strict'

const MessageController = require('../app/Controllers/Http/MessageController').default

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.get('/', 'MessageController.index')
  Route.get('/:id', 'MessageController.getById')
  Route.post('/', 'MessageController.post')
}).prefix('rest')