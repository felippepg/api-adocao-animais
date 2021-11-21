import { Request, Response } from 'express'
import { LoginService } from '../service/LoginService'
class LoginController {
  handle(request: Request, response: Response) {
    const { login, password } = request.body
    const loginService = new LoginService()
    const result = loginService.execute()
    return response.json(result)
  }
}

export { LoginController }
