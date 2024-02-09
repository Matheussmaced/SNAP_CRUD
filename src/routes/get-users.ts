import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'

export async function getUsers(app: FastifyInstance) {
  app.get('/users', async (request, reply) => {
    const usersOfDb = await prisma.users.findMany({
      select: {
        email: true,
        created_at: true,
      },
    })

    return reply.status(202).send(usersOfDb)
  })
}
