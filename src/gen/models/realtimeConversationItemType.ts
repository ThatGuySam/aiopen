/* eslint-disable jsdoc/check-alignment */

/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */

/**
 * The type of the item (`message`, `function_call`, `function_call_output`).

 */
export type RealtimeConversationItemType = typeof RealtimeConversationItemType[keyof typeof RealtimeConversationItemType]

// eslint-disable-next-line ts/no-redeclare
export const RealtimeConversationItemType = {
  message: 'message',
  function_call: 'function_call',
  function_call_output: 'function_call_output',
} as const
