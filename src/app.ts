import fastify from 'fastify'
import fastifyCors from '@fastify/cors'
import fastifyFormBody from '@fastify/formbody'

import { users } from './routes/create-users'
import { getUsers } from './routes/get-users'

import { corsMiddlewareAdapter } from '../middleware/corsMiddlewareAdapter'

export const app = fastify()

app.register(fastifyCors, {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
})

app.addHook('onRequest', corsMiddlewareAdapter)

app.register(fastifyFormBody)
app.register(getUsers)
app.register(users)
