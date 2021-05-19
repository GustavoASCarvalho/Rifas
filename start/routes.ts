import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/raffles/create', 'RafflesController.create').as('raffles.create')
  Route.post('/raffles', 'RafflesController.store').as('raffles.store')
}).middleware('auth')

Route.get('/raffles/:id', 'RafflesController.show').as('raffles.show')

Route.get('/about', 'HomeController.about').as('home.about')
Route.get('/', 'HomeController.index').as('home.index')

Route.get('/register', 'AuthController.register').as('auth.register')
Route.post('/register', 'AuthController.store').as('auth.store')
Route.get('/login', 'AuthController.login').as('auth.login')
Route.post('/login', 'AuthController.verify').as('auth.verify')
Route.get('/logout', 'AuthController.logout').as('auth.logout')
