import { Request, Response } from 'express'
import { CreateSexService } from '../services/Sex/CreateSexService'
import { FindOrDeleteSexService } from '../services/Sex/FindOrDeleteSexService'
import { UpdateSexService } from '../services/Sex/UpdateSexService'

class SexController {
  async add(request: Request, response: Response) {
    const { sex } = request.body
    const createSexService = new CreateSexService()
    const result = await createSexService.execute(sex)
    return response.json(result)
  }

  async all(request: Request, response: Response) {
    const findOrDeleteSexService = new FindOrDeleteSexService()
    const result = await findOrDeleteSexService.findAll()
    return response.json(result)
  }

  async one(request: Request, response: Response) {
    const { id } = request.params
    const findOrDeleteSexService = new FindOrDeleteSexService()
    const result = await findOrDeleteSexService.findOne(id)
    return response.json(result)
  }

  async update(request: Request, response: Response) {
    const { id } = request.params
    const { sex } = request.body
    const updateSexService = new UpdateSexService()
    const result = await updateSexService.execute(id, sex)
    return response.json(result)
  }

  async remove(request: Request, response: Response) {
    const { id } = request.params
    const findOrDeleteSexService = new FindOrDeleteSexService()
    const result = await findOrDeleteSexService.remove(id)
    return response.json(result)
  }
}

export { SexController }
