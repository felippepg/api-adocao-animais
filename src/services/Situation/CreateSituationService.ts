import prismaClient from '../../prisma'

class CreateSituationService {
  async execute(situation: string) {
    if (!situation || typeof situation != 'string') {
      return 'Situation value is not defined'
    }
    const data = await prismaClient.situation.create({
      data: { name: situation },
    })

    return data
  }
}

export { CreateSituationService }
