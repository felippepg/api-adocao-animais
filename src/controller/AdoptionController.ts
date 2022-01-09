import { Request, Response } from 'express'
import { AdoptionService } from '../services/AdoptionService'

class AdoptionController {
  async adoption(request: Request, response: Response) {
    const { userId, animalId } = request.body
    const adoptionService = new AdoptionService()
    const result = await adoptionService.execute(userId, animalId)

    return response.send(result)
  }

  async userAndPetAdoption(request: Request, response: Response) {
    const { userId } = request.body
    const adoptionService = new AdoptionService()
    const result = await adoptionService.findUserAndPet(userId)

    return response.send(result)
  }
}

export { AdoptionController }
