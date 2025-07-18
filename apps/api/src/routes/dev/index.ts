import { zValidator } from '@hono/zod-validator'
import { z } from 'zod'

import { createRouter } from '@/lib/create-app'

export const devRouter = createRouter()
  .get(
    '/',
    (c) => {
      return c.text('Hello Hono!')
    },
  )
  .post(
    '/',
    zValidator('json', z.object({
      name: z.string(),
    })),
    (c) => {
      const { name } = c.req.valid('json')
      return c.json({
        message: `Hello ${name}!`,
      })
    },
  )
