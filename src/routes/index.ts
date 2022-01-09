import UserController from '../controller/UserController'
import { Router } from 'express'
import { LoginController } from '../controller/LoginController'
import { SituationController } from '../controller/SituationController'
import { TypeController } from '../controller/TypeController'
import { SexController } from '../controller/SexController'
import { PetController } from '../controller/PetController'
import auth from '../middlewares/auth'
import { AdoptionController } from '../controller/AdoptionController'

const routes = Router()

routes.post('/register', new UserController().register)
routes.post('/login', new LoginController().login)

//Usuario
routes.use(auth)
routes.post('/user/:id/edit', new UserController().edit)
routes.get('/users', new UserController().all)
routes.get('/user/:id', new UserController().one)
routes.delete('/user/:id', new UserController().delete)

//Situação
routes.post('/situation/add', new SituationController().add)
routes.get('/situations', new SituationController().all)
routes.get('/situation/:id', new SituationController().one)
routes.delete('/situation/:id/delete', new SituationController().remove)

//Tipos
routes.post('/type/add', new TypeController().add)
routes.get('/types', new TypeController().all)
routes.get('/type/:id', new TypeController().one)
routes.put('/type/:id/edit', new TypeController().update)
routes.delete('/type/:id/delete', new TypeController().remove)

//Sexo animais
routes.post('/sex/add', new SexController().add)
routes.get('/sexs', new SexController().all)
routes.get('/sex/:id', new SexController().one)
routes.put('/sex/:id/edit', new SexController().update)
routes.delete('/sex/:id/delete', new SexController().remove)

//Pet
routes.post('/pet/add', new PetController().add)
routes.get('/pets', new PetController().all)
routes.get('/pets/pagination', new PetController().byPagination)
routes.get('/pets/all/pagination', new PetController().allByPagination)

// routes.get('/pet/:id', new PetController().one)

//Adoção
routes.post('/adoption', new AdoptionController().adoption)
routes.post('/adoption/my-pets', new AdoptionController().userAndPetAdoption)
export default routes
