/**
 * Cleans up the generated code from orval
 * So that it plays nice with antfu's eslint config
 *
 * @example
 * ```bash
 * pnpm tsx scripts/orval-cleanup.ts
 * ```
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { readdir } from 'node:fs/promises'
import { join } from 'node:path'
import { genDir } from '@/config'

async function processFiles(dir: string) {
  const files = await readdir(dir, { withFileTypes: true })

  for (const file of files) {
    const fullPath = join(dir, file.name)

    if (file.isDirectory()) {
      await processFiles(fullPath)
    }
    else if (file.isFile() && file.name.endsWith('.ts')) {
      try {
        const content = readFileSync(fullPath, 'utf8')
        const replaced = content.replace(/@typescript-eslint\//g, 'ts/')
        const withComments = [
          '/* eslint-disable style/max-statements-per-line */',
          '/* eslint-disable jsdoc/check-alignment */',
          '/* eslint-disable ts/explicit-function-return-type */',
          replaced,
        ].join('\n')

        if (content !== withComments) {
          writeFileSync(fullPath, withComments)
          console.log(`Updated ${fullPath}`)
        }
      }
      catch (error) {
        console.error(`Error processing ${fullPath}:`, error)
      }
    }
  }
}

// Run the cleanup
processFiles(genDir)
  .then(() => console.log('ESLint rule replacement complete'))
  .catch(console.error)
