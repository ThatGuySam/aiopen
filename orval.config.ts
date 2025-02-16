import { defineConfig } from 'orval'
import { genDir } from './src/config'

export default defineConfig({
  openai: {
    input: {
      target: './openapi.yaml',
      validation: false,
    },
    output: {
      mode: 'tags-split',
      target: `${genDir}/client.ts`,
      schemas: `${genDir}/models`,
      client: 'axios',
      mock: true,
      baseUrl: 'http://localhost:3000/v1',
    },
    hooks: {
      afterAllFilesWrite: [
        'pnpm tsx scripts/orval-cleanup.ts',
        'eslint --fix',
      ],
    },
  },
})
