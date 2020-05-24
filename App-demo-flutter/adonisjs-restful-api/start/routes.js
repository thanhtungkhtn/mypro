'use strict'

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
const Book = use('App/Models/Book')

Route.get('/', () => {
  return {
    greeting: 'Hello world in JSON'
  }
})

Route.group(() => {
  Route.post('books', 'BookController.store')
  Route.get('books', 'BookController.index')
  Route.get('books/:id', 'BookController.show')
  Route.put('books/:id', 'BookController.update')
  Route.delete('books/:id', 'BookController.delete')
}).prefix('api/v1')
