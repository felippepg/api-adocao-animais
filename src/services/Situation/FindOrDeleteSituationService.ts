import prismaClient from '../../prisma'

class FindOrDeleteSituationService {
  async findAll() {
    const situation = await prismaClient.situation.findMany()
    return { result: situation }
  }

  async findOne(id: string) {
    if (!id) {
      return 'ID is required'
    }

    const intId = parseInt(id)
    const situation = await prismaClient.situation.findFirst({
      where: { id: intId },
    })

    return situation
  }
  async remove(id: string) {
    if (!id) {
      return 'ID is required'
    }
    const intId = parseInt(id)
    await prismaClient.situation.delete({
      where: { id: intId },
    })
    return 'Deleted situation'
  }
}

export { FindOrDeleteSituationService }
