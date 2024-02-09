import fastify from 'fastify'
import { users } from './routes/create-users'

export const app = fastify()

app.register(users)
