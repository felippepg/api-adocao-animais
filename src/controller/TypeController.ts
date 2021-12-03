import { Request, Response } from 'express'
import { CreateTypeService } from '../services/Type/CreateTypeService'
import { FindOrDeleteTypeService } from '../services/Type/FindOrDeleteTypeService'
import { UpdateTypeService } from '../services/Type/UpdateTypeService'

class TypeController {
  async add(request: Request, response: Response) {
    const { type } = request.body
    const createTypeService = new CreateTypeService()
    const result = await createTypeService.execute(type)
    return response.json(result)
  }

  async all(request: Request, response: Response) {
    const findOrDeleteTypeService = new FindOrDeleteTypeService()
    const result = await findOrDeleteTypeService.findAll()
    return response.json(result)
  }

  async one(request: Request, response: Response) {
    const { id } = request.params
    const findOrDeleteTypeService = new FindOrDeleteTypeService()
    const result = await findOrDeleteTypeService.findOne(id)
    return response.json(result)
  }

  async update(request: Request, response: Response) {
    const { id } = request.params
    const { name } = request.body
    const updateTypeService = new UpdateTypeService()
    const result = await updateTypeService.execute(id, name)
    return response.json(result)
  }

  async remove(request: Request, response: Response) {
    const { id } = request.params
    const findOrDeleteTypeService = new FindOrDeleteTypeService()
    const result = await findOrDeleteTypeService.remove(id)
    return response.json(result)
  }
}

export { TypeController }
