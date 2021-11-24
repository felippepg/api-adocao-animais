import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

export default async function auth(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    return response.json('Token is required')
  }

  const [, token] = authHeader.split(' ')

  try {
    await jwt.verify(token, process.env.APP_SECRET as string)
    next()
    return response.status(200)
  } catch (error) {
    return response.json('Token not provided')
  }
}
