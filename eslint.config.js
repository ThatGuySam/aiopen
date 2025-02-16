// @ts-check
import antfu from '@antfu/eslint-config'

const DEFAULT_SPACE_INDENT = 4

export default antfu(
    {
        type: 'lib',
        stylistic: {
            indent: DEFAULT_SPACE_INDENT,
        },
    },
    {
        ignores: [
            'openapi.yaml',
        ],
    },
)
