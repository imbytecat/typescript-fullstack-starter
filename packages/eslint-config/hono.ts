import { combine  } from '@antfu/eslint-config'

import { baseConfig } from './base'

export const honoConfig = combine(
  await baseConfig,
)
