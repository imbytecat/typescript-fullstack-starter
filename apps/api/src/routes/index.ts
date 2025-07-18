import { createRouter } from '@/lib/create-app'

import { devRouter } from './dev'

export const apiRouter = createRouter().basePath('/api')

const apiRoutes = [
  devRouter,
] as const

apiRoutes.forEach((route) => {
  apiRouter.route('/', route)
})

export type ApiType = typeof apiRoutes[number]
