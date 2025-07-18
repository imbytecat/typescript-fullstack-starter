import { createRouter } from '@/lib/create-app'

import { exampleRouter } from './example'

export const devRouter = createRouter()
  .basePath('/dev')
  .route('/', exampleRouter)
