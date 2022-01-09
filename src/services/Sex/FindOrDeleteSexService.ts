import prismaClient from '../../prisma'

class FindOrDeleteSexService {
  async findAll() {
    const sexs = await prismaClient.sex.findMany()
    return { result: sexs }
  }

  async findOne(id: string) {
    if (!id) {
      return 'ID is required'
    }

    const intId = parseInt(id)
    const sex = await prismaClient.sex.findFirst({
      where: { id: intId },
    })

    return sex
  }
  async remove(id: string) {
    if (!id) {
      return 'ID is required'
    }
    const intId = parseInt(id)
    await prismaClient.sex.delete({
      where: { id: intId },
    })
    return 'Deleted sex'
  }
}

export { FindOrDeleteSexService }
