/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { BatchErrorsDataItem } from './batchErrorsDataItem'

export interface BatchErrors {
    /** The object type, which is always `list`. */
    object?: string
    data?: BatchErrorsDataItem[]
}
