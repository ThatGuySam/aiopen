/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */

/**
 * The type of the tool. If type is `function`, the function name must be set
 */
export type AssistantsNamedToolChoiceType = typeof AssistantsNamedToolChoiceType[keyof typeof AssistantsNamedToolChoiceType]

// eslint-disable-next-line ts/no-redeclare
export const AssistantsNamedToolChoiceType = {
    function: 'function',
    code_interpreter: 'code_interpreter',
    file_search: 'file_search',
} as const
