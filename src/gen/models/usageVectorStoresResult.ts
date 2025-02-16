/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { UsageVectorStoresResultObject } from './usageVectorStoresResultObject'

/**
 * The aggregated vector stores usage details of the specific time bucket.
 */
export interface UsageVectorStoresResult {
  object: UsageVectorStoresResultObject
  /** The vector stores usage in bytes. */
  usage_bytes: number
  /**
   * When `group_by=project_id`, this field provides the project ID of the grouped usage result.
   * @nullable
   */
  project_id?: string | null
}
