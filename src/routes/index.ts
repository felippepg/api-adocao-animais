import UserController from '../controller/UserController'
import { Router } from 'express'
import { LoginController } from '../controller/LoginController'
// import auth from '../middlewares/auth'

const routes = Router()

routes.post('/register', new UserController().register)
routes.post('/login', new LoginController().login)

// routes.use(auth)
routes.post('/user/:id', new UserController().edit)

export default routes
