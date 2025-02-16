/* eslint-disable jsdoc/check-alignment */

/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { RealtimeServerEventRateLimitsUpdatedRateLimitsItemName } from './realtimeServerEventRateLimitsUpdatedRateLimitsItemName'

export interface RealtimeServerEventRateLimitsUpdatedRateLimitsItem {
  /**
  The name of the rate limit (`requests`, `tokens`).
 */
  name?: RealtimeServerEventRateLimitsUpdatedRateLimitsItemName
  /** The maximum allowed value for the rate limit. */
  limit?: number
  /** The remaining value before the limit is reached. */
  remaining?: number
  /** Seconds until the rate limit resets. */
  reset_seconds?: number
}
