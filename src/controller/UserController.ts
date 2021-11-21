import { Request, Response } from 'express'
import { UserService } from '../service/CreadUserService'

class UserController {
  async register(request: Request, response: Response) {
    const { name, login, password } = request.body
    const userService = new UserService()
    const result = await userService.execute(name, login, password)
    response.json(result)
  }
}

export default UserController
