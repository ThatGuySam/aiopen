/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */

/**
 * The request counts for different statuses within the batch.
 */
export interface BatchRequestCounts {
  /** Total number of requests in the batch. */
  total: number
  /** Number of requests that have been completed successfully. */
  completed: number
  /** Number of requests that have failed. */
  failed: number
}
