import UserController from '../controller/UserController'
import { Router } from 'express'
import { LoginController } from '../controller/LoginController'
import auth from '../middlewares/auth'

const routes = Router()

routes.post('/register', new UserController().register)
routes.post('/login', new LoginController().handle)

routes.use(auth)
routes.get('/users', (req, res) => {
  res.send('Deu certo')
})
export default routes
