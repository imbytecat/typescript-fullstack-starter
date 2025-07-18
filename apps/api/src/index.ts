import { createApp } from './lib/create-app'
import { apiRouter } from './routes'

const app = createApp()
  .route('/', apiRouter)

export default app
