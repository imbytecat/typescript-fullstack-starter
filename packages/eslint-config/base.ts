import antfu from '@antfu/eslint-config'

export default antfu({
  lessOpinionated: true,
  stylistic: true,
  typescript: true,
  formatters: true,
  ignores: [
    '**/node_modules',
    '**/dist',
  ],
})
