import { zValidator } from '@hono/zod-validator'
import { Hono } from 'hono'
import z from 'zod'

const app = new Hono()

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

export default app
