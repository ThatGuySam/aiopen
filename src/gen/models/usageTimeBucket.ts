/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { UsageTimeBucketObject } from './usageTimeBucketObject'
import type { UsageTimeBucketResultItem } from './usageTimeBucketResultItem'

export interface UsageTimeBucket {
  object: UsageTimeBucketObject
  start_time: number
  end_time: number
  result: UsageTimeBucketResultItem[]
}
