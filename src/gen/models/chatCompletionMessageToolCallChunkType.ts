/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */

/**
 * The type of the tool. Currently, only `function` is supported.
 */
export type ChatCompletionMessageToolCallChunkType = typeof ChatCompletionMessageToolCallChunkType[keyof typeof ChatCompletionMessageToolCallChunkType]

// eslint-disable-next-line ts/no-redeclare
export const ChatCompletionMessageToolCallChunkType = {
  function: 'function',
} as const
