import type { ErrorHandler } from 'hono'
import type { ContentfulStatusCode } from 'hono/utils/http-status'

import { StatusCodes } from 'http-status-codes'

export const onError: ErrorHandler = (err, c) => {
  const currentStatus = 'status' in err
    ? err.status
    : c.newResponse(null).status
  const statusCode = currentStatus !== StatusCodes.OK
    ? (currentStatus as ContentfulStatusCode)
    : StatusCodes.INTERNAL_SERVER_ERROR
  // eslint-disable-next-line node/prefer-global/process
  const env = c.env?.NODE_ENV || process.env?.NODE_ENV
  return c.json(
    {
      message: err.message,

      stack: env === 'production'
        ? undefined
        : err.stack,
    },
    statusCode,
  )
}
