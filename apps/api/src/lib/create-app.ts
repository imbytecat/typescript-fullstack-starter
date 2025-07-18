import type { Schema } from 'hono'

import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { requestId } from 'hono/request-id'

import { notFound } from '@/middlewares/not-found'
import { onError } from '@/middlewares/on-error'

import type { App, AppBindings } from './types'

export const createRouter = () => new Hono<AppBindings>({
  strict: false,
})

export const createApp = () => {
  const app = createRouter()

  app.use(requestId())
  app.use(cors())

  app.notFound(notFound)
  app.onError(onError)

  return app
}

export const createTestApp = <S extends Schema>(router: App<S>) => {
  return createApp().route('/', router)
}
