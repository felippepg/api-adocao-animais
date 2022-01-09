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

  async findByPagination(skip: string, take: string) {
    const animals = await prismaClient.pet.findMany({
      where: {
        situationId: 2,
      },
      skip: parseInt(skip),
      take: parseInt(take),
    })

    const total = await prismaClient.pet.aggregate({
      where: {
        situationId: 2,
      },
      _count: {
        id: true,
      },
    })
    return { result: animals, total }
  }

  async findAllByPagination(skip: string, take: string) {
    const animals = await prismaClient.pet.findMany({
      skip: parseInt(skip),
      take: parseInt(take),
    })

    const total = await prismaClient.pet.aggregate({
      _count: {
        id: true,
      },
    })
    return { result: animals, total }
  }
}

export { FindOrDeletePetnService }
