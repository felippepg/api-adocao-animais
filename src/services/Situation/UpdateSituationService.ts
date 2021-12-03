import prismaClient from '../../prisma'
class UpdateSituationService {
  async execute(id: string, situation: string) {
    if (!id) {
      return 'ID is required'
    }
    if (!situation) {
      return 'situation is required'
    } else {
      const intId = parseInt(id)
      const dbSituation = await prismaClient.situation.findUnique({
        where: { id: intId },
      })
      if (!dbSituation) {
        return 'Situation not found'
      }

      const newSituation = await prismaClient.situation.update({
        where: {
          id: intId,
        },
        data: {
          name: situation.toUpperCase(),
        },
      })
      return newSituation
    }
  }
}
export { UpdateSituationService }
