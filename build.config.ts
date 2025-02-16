import { resolve } from 'pathe'
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
    entries: [
        {
            input: 'src/index',
            name: 'index',
        },
    ],
    declaration: 'node16',
    clean: true,
    alias: {
        '@': resolve(__dirname, './src'),
    },
    rollup: {
        emitCJS: false,
        esbuild: {
            minify: true,
            target: 'node18',
        },
        output: {
            banner: '#!/usr/bin/env node',
        },
    },
})
