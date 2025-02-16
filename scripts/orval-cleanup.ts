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
import process from 'node:process'
import { genDir } from '@/config'

// Record start time
const startTime = process.hrtime.bigint()

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
          '/* eslint-disable eslint-comments/no-duplicate-disable */',
          '/* eslint-disable style/max-statements-per-line */',
          '/* eslint-disable jsdoc/check-alignment */',
          '/* eslint-disable ts/explicit-function-return-type */',
          '/* eslint-disable unused-imports/no-unused-vars */',
          replaced,
        ].join('\n')

        if (content !== withComments) {
          writeFileSync(fullPath, withComments)
          // console.log(`Updated ${fullPath}`)
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
  .then(() => {
    const endTime = process.hrtime.bigint()
    const durationMs = Number(endTime - startTime) / 1_000_000
    console.log(`✅ Orval gen cleanup completed in ${durationMs.toFixed(2)}ms`)
  })
  .catch(console.error)
