import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

export async function users(app: FastifyInstance) {
  app.get('/users', async (request, reply) => {
    reply.send('hello world')
  })

  app.post('/users', async (req, reply) => {
    const createUserSchema = z.object({
      email: z.string().email(),
      password: z.string().min(3),
    })

    const { email, password } = createUserSchema.parse(req.body)

    await prisma.users.create({
      data: {
        email,
        password_hash: password,
      },
    })

    return reply.status(201).send()
  })
}
