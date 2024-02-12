import fastify from 'fastify'

import { users } from './routes/create-users'
import { getUsers } from './routes/get-users'

import { corsMiddlewareAdapter } from '../middleware/corsMiddlewareAdapter'

export const app = fastify()

app.addHook('onRequest', corsMiddlewareAdapter)
app.register(getUsers)
app.register(users)
