import prismaClient from '../../prisma'
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
        login,
      },
    })
    if (userExists) {
      return {
        error:
          'Usuario já existe, verifique os dados informados e tente novamente',
      }
    } else {
      const hashPassword = await bcrypt.hash(password, 10)
      const user = await prismaClient.user.create({
        data: {
          name,
          login,
          password: hashPassword,
        },
      })
      const data = {
        id: user.id,
        name: user.name,
        login: user.login,
      }
      return data
    }
  }
}
export { UserService }
