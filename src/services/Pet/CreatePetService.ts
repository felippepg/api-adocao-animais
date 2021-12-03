import prismaClient from '../../prisma'

class CreatePetService {
  async execute(
    name: string,
    sexId: number,
    age: string,
    bio: string,
    situationId: number,
    typeId: number
  ) {
    if (
      !name ||
      !sexId ||
      !age ||
      !bio ||
      !situationId ||
      !typeId ||
      typeof name != 'string' ||
      typeof sexId != 'number' ||
      typeof age != 'string' ||
      typeof bio != 'string' ||
      typeof situationId != 'number' ||
      typeof typeId != 'number'
    ) {
      return 'Invalid Values'
    }
    const pet = await prismaClient.pet.create({
      data: { name, sexId, age, bio, situationId, typeId },
    })
    return pet
  }
}

export { CreatePetService }
