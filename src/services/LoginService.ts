import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import prismaClient from '../prisma'
class LoginService {
  async execute(login: string, password: string) {
    const user = await prismaClient.user.findFirst({
      where: {
        login,
      },
    })
    if (!user) {
      return { error: 'Usuario não encontrado' }
    }
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        { id: user.id },
        process.env.APP_SECRET as string,
        {
          expiresIn: '1d',
        }
      )
      const data = {
        id: user.id,
        name: user.name,
        login: user.login,
        token,
      }
      return data
    } else {
      return { error: 'Credenciais inválidas' }
    }
  }
}

export { LoginService }
