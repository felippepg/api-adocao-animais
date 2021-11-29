import prismaClient from '../../prisma'

class CreateSexService {
  async execute(sex: string) {
    if (!sex || typeof sex != 'string') {
      return 'Type value is not defined'
    }
    const data = await prismaClient.sex.create({
      data: { name: sex.toUpperCase() },
    })

    return data
  }
}

export { CreateSexService }
