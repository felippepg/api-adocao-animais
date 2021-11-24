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
    console.log(user)
    if (!user) {
      return 'User not found'
    }
    if (await bcrypt.compare(password, user.password)) {
      console.log(process.env.APP_SECRET)
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
      return 'Invalid Credentials'
    }
  }
}

export { LoginService }
