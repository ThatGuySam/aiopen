// @ts-check
import antfu from '@antfu/eslint-config'

const DEFAULT_SPACE_INDENT = 4

export default antfu(
    {
        type     : 'lib',
        yaml     : false,
        stylistic: {
            indent   : DEFAULT_SPACE_INDENT,
            overrides: {
                '@stylistic/max-len': [
                    'error',
                    {
                        code: 60,
                    },
                ],
                '@stylistic/object-curly-newline': [
                    'error',
                    {
                        ObjectExpression: {
                            multiline    : true,
                            minProperties: 1,
                        },
                        ObjectPattern: {
                            multiline    : true,
                            minProperties: 1,
                        },
                    },
                ],
                '@stylistic/object-property-newline': [
                    'error',
                    {
                        allowAllPropertiesOnSameLine: false,
                    },
                ],
                '@stylistic/key-spacing': [
                    'error',
                    {
                        beforeColon: false,
                        afterColon : true,
                        align      : 'colon',
                    },
                ],
                '@stylistic/indent-binary-ops': [
                    'error',
                    4,
                ],
                '@stylistic/array-bracket-newline': [
                    'error',
                    {
                        multiline: true,
                        minItems : 2,
                    },
                ],
                '@stylistic/array-element-newline': [
                    'error',
                    {
                        multiline: true,
                        minItems : 2,
                    },
                ],
                '@stylistic/array-bracket-spacing': [
                    'error',
                    'never',
                ],
                '@stylistic/comma-style': [
                    'error',
                    'last',
                ],
                '@stylistic/comma-spacing': [
                    'error',
                    {
                        before: false,
                        after : true,
                    },
                ],
                '@stylistic/comma-dangle': [
                    'error',
                    'always-multiline',
                ],
            },
        },
    },
    {
        ignores: ['openapi.yaml'],
    },
)
