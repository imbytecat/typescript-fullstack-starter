import antfu from '@antfu/eslint-config'

export const baseConfig = antfu({
  lessOpinionated: true,
  stylistic: true,
  typescript: true,
  formatters: true,
  ignores: [
    '**/node_modules',
    '**/dist',
  ],
}, {
  rules: {
    'antfu/if-newline': 'off',
    'eslint-comments/no-unlimited-disable': ['off'],
    'no-console': ['warn'],
    'perfectionist/sort-imports': ['error', { tsconfigRootDir: '.' }],
    'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'style/max-statements-per-line': ['error', { max: 2 }],
    'ts/consistent-type-definitions': ['off'],
    'ts/no-empty-object-type': ['off'],
  },
})
