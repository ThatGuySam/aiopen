/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */

/**
 * The type of run step, which can be either `message_creation` or `tool_calls`.
 */
export type RunStepObjectType = typeof RunStepObjectType[keyof typeof RunStepObjectType]

// eslint-disable-next-line ts/no-redeclare
export const RunStepObjectType = {
  message_creation: 'message_creation',
  tool_calls: 'tool_calls',
} as const
