/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */

/**
 * The current status of the batch.
 */
export type BatchStatus = typeof BatchStatus[keyof typeof BatchStatus]

// eslint-disable-next-line ts/no-redeclare
export const BatchStatus = {
    validating: 'validating',
    failed: 'failed',
    in_progress: 'in_progress',
    finalizing: 'finalizing',
    completed: 'completed',
    expired: 'expired',
    cancelling: 'cancelling',
    cancelled: 'cancelled',
} as const
