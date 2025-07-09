/* eslint-disable antfu/no-top-level-await */
import { combine, react } from '@antfu/eslint-config'

import { baseConfig } from './base'

export const reactConfig = combine(
  await baseConfig,
  react()
)
