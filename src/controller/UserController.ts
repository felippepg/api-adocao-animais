import { Request, Response } from 'express'
import { UserService } from '../service/CreadUserService'
import { UpdateUserService } from '../service/UpdateUserService'

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
    const { id } = request.params
    const { name, login } = request.body
    const userService = new UpdateUserService()
    const result = await userService.execute(id, name, login)
    response.json(result)
  }
}

export default UserController
