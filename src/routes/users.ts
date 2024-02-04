import { FastifyInstance } from 'fastify'

export async function users(app: FastifyInstance) {
  app.get('/users', async (request, reply) => {
    reply.send('hello world')
  })
}
