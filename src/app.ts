import fastify from 'fastify'
import { users } from './routes/users'
import { PrismaClient } from '@prisma/client'

export const app = fastify()

const prisma = new PrismaClient()

prisma.users.create({
  data: {
    email: 'Matheustest@gmail.com',
    password_hash: '123',
  },
})

app.register(users)
