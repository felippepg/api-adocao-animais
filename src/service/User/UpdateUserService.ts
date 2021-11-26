import prismaClient from '../../prisma'
class UpdateUserService {
  async execute(id: string, name: string, login: string) {
    if (!id) {
      return 'ID is required'
    }
    const intId = parseInt(id)
    const user = await prismaClient.user.findUnique({ where: { id: intId } })
    if (!user) {
      return 'User not found'
    }

    if (!name) {
      const newUserWithoutName = await prismaClient.user.update({
        where: {
          id: user.id,
        },
        data: {
          login,
        },
      })

      return newUserWithoutName
    }
    if (!login) {
      const newUserWithoutLogin = await prismaClient.user.update({
        where: {
          id: user.id,
        },
        data: {
          name,
        },
      })

      return newUserWithoutLogin
    }
    const newUser = await prismaClient.user.update({
      where: {
        id: user.id,
      },
      data: {
        name,
        login,
      },
    })
    return newUser
  }
}
export { UpdateUserService }
