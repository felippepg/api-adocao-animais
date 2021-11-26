import prismaClient from '../../prisma'

class FindOrDeleteUserService {
  async findAll() {
    const users = await prismaClient.user.findMany({
      select: { name: true, login: true },
    })
    return users
  }

  async findOne(id: string) {
    if (!id) {
      return 'ID is required'
    }

    const intId = parseInt(id)
    const user = await prismaClient.user.findFirst({
      where: { id: intId },
      select: { name: true, login: true },
    })

    return user
  }

  async delete(id: string) {
    if (!id) {
      return 'ID is required'
    }

    const intId = parseInt(id)
    await prismaClient.user.delete({
      where: { id: intId },
    })

    return 'Deleted user'
  }
}

export { FindOrDeleteUserService }
