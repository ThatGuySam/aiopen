import { defineConfig } from 'orval'

const genDir = './src/gen'

export default defineConfig({
  openai: {
    input: {
      target: './openapi.yaml',
      validation: true,
    },
    output: {
      mode: 'split',
      target: `${genDir}/client.ts`,
      schemas: `${genDir}/models`,
      client: 'axios',
      mock: false,
      baseUrl: 'http://localhost:3000/v1',
    },
    hooks: {
      afterAllFilesWrite: 'eslint --fix',
    },
  },
})
