import prismaClient from '../../prisma'
class UpdateTypeService {
  async execute(id: string, name: string) {
    if (!id) {
      return 'ID is required'
    }
    if (!name) {
      return 'Name is required'
    } else {
      const intId = parseInt(id)
      const dbType = await prismaClient.type.findUnique({
        where: { id: intId },
      })
      if (!dbType) {
        return 'Type not found'
      }

      const newType = await prismaClient.type.update({
        where: {
          id: intId,
        },
        data: {
          name,
        },
      })
      return newType
    }
  }
}
export { UpdateTypeService }
