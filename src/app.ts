import fastify from 'fastify'

import { users } from './routes/create-users'
import { getUsers } from './routes/get-users'

export const app = fastify()

app.register(getUsers)
app.register(users)
