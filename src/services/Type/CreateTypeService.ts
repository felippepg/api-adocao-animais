import prismaClient from '../../prisma'

class CreateTypeService {
  async execute(type: string) {
    if (!type || typeof type != 'string') {
      return 'Type value is not defined'
    }
    const data = await prismaClient.type.create({
      data: { name: type },
    })

    return data
  }
}

export { CreateTypeService }
