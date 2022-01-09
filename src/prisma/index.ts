import { PrismaClient } from '@prisma/client'
import dotenv from 'dotenv'
// const prismaClient = new PrismaClient()
dotenv.config()
const prismaClient =
  process.env.NODE_ENV === 'dev'
    ? new PrismaClient({
        datasources: {
          db: {
            url: `mysql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:3306/${process.env.DB_NAME}?schema=public`,
          },
        },
      })
    : new PrismaClient()
export default prismaClient
