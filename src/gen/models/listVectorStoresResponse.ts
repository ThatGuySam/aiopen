/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { VectorStoreObject } from './vectorStoreObject'

export interface ListVectorStoresResponse {
    object: string
    data: VectorStoreObject[]
    first_id: string
    last_id: string
    has_more: boolean
}
