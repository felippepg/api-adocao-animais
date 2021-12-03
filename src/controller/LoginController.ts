import { Request, Response } from 'express'
import { LoginService } from '../services/LoginService'
class LoginController {
  async login(request: Request, response: Response) {
    const { login, password } = request.body
    const loginService = new LoginService()
    const result = await loginService.execute(login, password)
    return response.json(result)
  }
}

export { LoginController }
