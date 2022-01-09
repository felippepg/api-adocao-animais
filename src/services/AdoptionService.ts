import prismaClient from '../prisma'

class AdoptionService {
  async execute(userId: string, animalId: string) {
    if (!userId || !animalId) {
      return { result: 'Verifique os parametros' }
    }

    const pet = await prismaClient.pet.update({
      where: {
        id: parseInt(animalId),
      },
      data: {
        situationId: 1,
      },
    })
    const adoption = await prismaClient.adoption.create({
      data: {
        userId: parseInt(userId),
        petId: parseInt(animalId),
      },
    })

    return { result: 'Adoção realizada com sucesso', adoption, pet }
  }
  async findUserAndPet(userId: string) {
    if (!userId) {
      return { result: 'Verifique os parametros' }
    }

    // query
    // select Pet.name, Pet.age, Type.name from Adoption
    // inner join Pet on Adoption.petId = Pet.id
    // inner join Type on Pet.typeId = Type.id
    // where Adoption.userId=3;

    const adoption = await prismaClient.user.findMany({
      where: {
        id: parseInt(userId),
      },
      include: {
        adoption: {
          include: {
            pet: {
              include: {
                type: {
                  select: {
                    name: true,
                  },
                },
              },
            },
          },
        },
      },
    })

    return { adoption }
  }
}

export { AdoptionService }
