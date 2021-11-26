import { Request, Response } from 'express'
import { UserService } from '../service/User/CreadUserService'
import { FindOrDeleteUserService } from '../service/User/FindOrDeleteUserService'
import { UpdateUserService } from '../service/User/UpdateUserService'

class UserController {
  async register(request: Request, response: Response) {
    const { name, login, password } = request.body
    const userService = new UserService()
    const result = await userService.execute(name, login, password)
    response.json(result)
  }

  async edit(request: Request, response: Response) {
    const { id } = request.params
    const { name, login } = request.body
    const userService = new UpdateUserService()
    const result = await userService.execute(id, name, login)
    response.json(result)
  }

  async all(request: Request, response: Response) {
    const findOrDeleteUserService = new FindOrDeleteUserService()
    const result = await findOrDeleteUserService.findAll()
    response.json(result)
  }

  async one(request: Request, response: Response) {
    const { id } = request.params
    const findOrDeleteUserService = new FindOrDeleteUserService()
    const result = await findOrDeleteUserService.findOne(id)
    response.json(result)
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params
    const findOrDeleteUserService = new FindOrDeleteUserService()
    const result = await findOrDeleteUserService.delete(id)
    response.json(result)
  }
}

export default UserController
