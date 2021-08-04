
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



// Route.get('/', async () => { 
//   return await load();
// })

// Route.get('/:id', async ({params, response}) => { 
//   let jsons = await load();
//   console.log(params.id);
//   let json = await jsons.filter(user => Number(user.id) === Number(params.id)); 
//   console.log(json);
//   return json;
// })


// async function load() {
//   const uri = 'https://jsonplaceholder.typicode.com/users';

//   let response = await fetch(uri);
//   let json = await response.json();
//   return json; 
// }