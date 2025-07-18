import { zValidator } from '@hono/zod-validator'
import { z } from 'zod'

import { createRouter } from '@/lib/create-app'

export const exampleRouter = createRouter()
  .basePath('/example')

  .get(
    '/hello',
    (c) => {
      return c.json({
        message: 'Hello Hono!',
      })
    },
  )

  .post(
    '/greeting',
    zValidator('json', z.object({
      name: z.string(),
    })),
    (c) => {
      const { name } = c.req.valid('json')
      return c.json({
        message: `Hello ${name}!`,
        name,
      })
    },
  )
