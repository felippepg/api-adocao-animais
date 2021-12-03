import prismaClient from '../../prisma'

class FindOrDeletePetnService {
  async findAll() {
    const pets = await prismaClient.pet.findMany()
    return pets
  }

  async findOne(id: string) {
    if (!id) {
      return 'ID is required'
    }

    const intId = parseInt(id)
    const pet = await prismaClient.pet.findFirst({
      where: { id: intId },
    })

    return pet
  }

  async remove(id: string) {
    if (!id) {
      return 'ID is required'
    }
    const intId = parseInt(id)
    await prismaClient.pet.delete({
      where: { id: intId },
    })
    return 'Deleted pet'
  }
}

export { FindOrDeletePetnService }
