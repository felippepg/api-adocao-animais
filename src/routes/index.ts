import UserController from '../controller/UserController'
import { Router } from 'express'
import { LoginController } from '../controller/LoginController'
import { SituationController } from '../controller/SituationController'
// import auth from '../middlewares/auth'

const routes = Router()

routes.post('/register', new UserController().register)
routes.post('/login', new LoginController().login)

//Usuario
// routes.use(auth)
routes.post('/user/:id/edit', new UserController().edit)
routes.get('/users', new UserController().all)
routes.get('/user/:id', new UserController().one)
routes.delete('/user/:id', new UserController().delete)

//Situação
routes.post('/situation/add', new SituationController().add)
routes.get('/situations', new SituationController().all)
routes.get('/situation/:id', new SituationController().one)
routes.delete('/situation/:id/delete', new SituationController().remove)
export default routes
