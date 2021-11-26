import { Request, Response } from 'express'
import { CreateSituationService } from '../service/Situation/CreateSituationService'
import { FindOrDeleteSituationService } from '../service/Situation/FindOrDeleteSituationService'

class SituationController {
  async add(request: Request, response: Response) {
    const { situation } = request.body
    const createSituationService = new CreateSituationService()
    const result = await createSituationService.execute(situation)
    return response.json(result)
  }

  async all(request: Request, response: Response) {
    const findOrDeleteSituationService = new FindOrDeleteSituationService()
    const result = await findOrDeleteSituationService.findAll()
    return response.json(result)
  }

  async one(request: Request, response: Response) {
    const { id } = request.params
    const findOrDeleteSituationService = new FindOrDeleteSituationService()
    const result = await findOrDeleteSituationService.findOne(id)
    return response.json(result)
  }

  async remove(request: Request, response: Response) {
    const { id } = request.params
    const findOrDeleteSituationService = new FindOrDeleteSituationService()
    const result = await findOrDeleteSituationService.remove(id)
    return response.json(result)
  }
}

export { SituationController }
