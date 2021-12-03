import { Request, Response } from 'express'
import { CreatePetService } from '../services/Pet/CreatePetService'
import { FindOrDeletePetnService } from '../services/Pet/FindOrDeletePetnService'

class PetController {
  async add(request: Request, response: Response) {
    const { name, sexId, age, bio, situationId, typeId } = request.body
    const createPetService = new CreatePetService()
    const result = await createPetService.execute(
      name,
      sexId,
      age,
      bio,
      situationId,
      typeId
    )
    return response.json(result)
  }

  async all(request: Request, response: Response) {
    const findOrDeletePetnService = new FindOrDeletePetnService()
    const result = await findOrDeletePetnService.findAll()
    return response.json(result)
  }
}

export { PetController }
