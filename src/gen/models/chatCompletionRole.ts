/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */

/**
 * The role of the author of a message
 */
export type ChatCompletionRole = typeof ChatCompletionRole[keyof typeof ChatCompletionRole]

// eslint-disable-next-line ts/no-redeclare
export const ChatCompletionRole = {
    developer: 'developer',
    system: 'system',
    user: 'user',
    assistant: 'assistant',
    tool: 'tool',
    function: 'function',
} as const
