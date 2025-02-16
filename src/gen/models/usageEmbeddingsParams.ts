/* eslint-disable jsdoc/check-alignment */

/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { UsageEmbeddingsBucketWidth } from './usageEmbeddingsBucketWidth'
import type { UsageEmbeddingsGroupByItem } from './usageEmbeddingsGroupByItem'

export interface UsageEmbeddingsParams {
/**
 * Start time (Unix seconds) of the query time range, inclusive.
 */
  start_time: number
  /**
 * End time (Unix seconds) of the query time range, exclusive.
 */
  end_time?: number
  /**
 * Width of each time bucket in response. Currently `1m`, `1h` and `1d` are supported, default to `1d`.
 */
  bucket_width?: UsageEmbeddingsBucketWidth
  /**
 * Return only usage for these projects.
 */
  project_ids?: string[]
  /**
 * Return only usage for these users.
 */
  user_ids?: string[]
  /**
 * Return only usage for these API keys.
 */
  api_key_ids?: string[]
  /**
 * Return only usage for these models.
 */
  models?: string[]
  /**
 * Group the usage data by the specified fields. Support fields include `project_id`, `user_id`, `api_key_id`, `model` or any combination of them.
 */
  group_by?: UsageEmbeddingsGroupByItem[]
  /**
 * Specifies the number of buckets to return.
- `bucket_width=1d`: default: 7, max: 31
- `bucket_width=1h`: default: 24, max: 168
- `bucket_width=1m`: default: 60, max: 1440

 */
  limit?: number
  /**
 * A cursor for use in pagination. Corresponding to the `next_page` field from the previous response.
 */
  page?: string
}
