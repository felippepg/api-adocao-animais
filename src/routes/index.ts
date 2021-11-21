import UserController from '../controller/UserController'
import { Router } from 'express'
import { LoginController } from '../controller/LoginController'

const routes = Router()

routes.post('/register', new UserController().register)
routes.post('/login', new LoginController().handle)
export default routes
