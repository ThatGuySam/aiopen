#!/usr/bin/env node

import { execSync } from 'node:child_process'
import process from 'node:process'
import { genDir } from '@/config'

const start = process.hrtime.bigint()
try {
    // Delete existing genDir
    execSync(`rm -rf ${genDir}`)
    execSync('orval', { stdio: 'inherit' })
    const duration = Number(process.hrtime.bigint() - start) / 1_000_000
    console.log(`🏁 Orval completed in ${duration.toFixed(2)}ms`)
}
catch (error) {
    const duration = Number(process.hrtime.bigint() - start) / 1_000_000
    console.error(`💥 Failed after ${duration.toFixed(2)}ms`, error)
    process.exit(1)
}
