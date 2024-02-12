import { FastifyRequest, FastifyReply, onRequestHookHandler } from 'fastify'

export const corsMiddlewareAdapter: onRequestHookHandler = (
  request: FastifyRequest,
  reply: FastifyReply,
  done: (error?: Error) => void,
) => {
  const corsMiddleware = () => {
    reply.header('Access-Control-Allow-Origin', '*')
    reply.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    reply.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    done()
  }

  corsMiddleware()
}
