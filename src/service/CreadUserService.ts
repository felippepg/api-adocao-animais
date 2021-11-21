import prismaClient from '../prisma'
import bcrypt from 'bcrypt'
class UserService {
  async execute(name: string, login: string, password: string) {
    if (
      !name ||
      !login ||
      !password ||
      typeof name != 'string' ||
      typeof login != 'string' ||
      typeof password != 'string'
    ) {
      return 'Invalid Values'
    }
    const userExists = await prismaClient.user.findFirst({
      where: {
        name,
      },
    })
    if (userExists) {
      return 'User already exists'
    } else {
      const hashPassword = await bcrypt.hash(password, 10)
      const user = await prismaClient.user.create({
        data: {
          name,
          login,
          password: hashPassword,
        },
      })
      return user
    }
  }
}
export { UserService }
