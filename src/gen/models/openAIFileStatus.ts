/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */

/**
 * Deprecated. The current status of the file, which can be either `uploaded`, `processed`, or `error`.
 * @deprecated
 */
export type OpenAIFileStatus = typeof OpenAIFileStatus[keyof typeof OpenAIFileStatus]

// eslint-disable-next-line ts/no-redeclare
export const OpenAIFileStatus = {
    uploaded: 'uploaded',
    processed: 'processed',
    error: 'error',
} as const
