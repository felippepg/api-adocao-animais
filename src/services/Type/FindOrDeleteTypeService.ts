import prismaClient from '../../prisma'

class FindOrDeleteTypeService {
  async findAll() {
    const types = await prismaClient.type.findMany()
    return { result: types }
  }

  async findOne(id: string) {
    if (!id) {
      return 'ID is required'
    }

    const intId = parseInt(id)
    const type = await prismaClient.type.findFirst({
      where: { id: intId },
    })

    return type
  }
  async remove(id: string) {
    if (!id) {
      return 'ID is required'
    }
    const intId = parseInt(id)
    await prismaClient.type.delete({
      where: { id: intId },
    })
    return 'Deleted type'
  }
}

export { FindOrDeleteTypeService }
