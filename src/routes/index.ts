import UserController from '../controller/UserController'
import { Router } from 'express'

const routes = Router()

routes.post('/register', new UserController().register)
routes.post('/login')
export default routes
