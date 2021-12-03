import prismaClient from '../../prisma'
class UpdateSexService {
  async execute(id: string, sex: string) {
    if (!id) {
      return 'ID is required'
    }
    if (!sex) {
      return 'Sex is required'
    } else {
      const intId = parseInt(id)
      const dbSex = await prismaClient.sex.findUnique({
        where: { id: intId },
      })
      if (!dbSex) {
        return 'Sex not found'
      }

      const newSex = await prismaClient.sex.update({
        where: {
          id: intId,
        },
        data: {
          name: sex.toUpperCase(),
        },
      })
      return newSex
    }
  }
}
export { UpdateSexService }
