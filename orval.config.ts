import { defineConfig } from 'orval'
import { genDir } from './src/config'

export default defineConfig({
  openai: {
    input: {
      target: './openapi.yaml',
      validation: false,
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
