import type { CreateEmbeddingResponseObject } from './createEmbeddingResponseObject'
import type { CreateEmbeddingResponseUsage } from './createEmbeddingResponseUsage'
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { Embedding } from './embedding'

export interface CreateEmbeddingResponse {
    /** The list of embeddings generated by the model. */
    data: Embedding[]
    /** The name of the model used to generate the embedding. */
    model: string
    /** The object type, which is always "list". */
    object: CreateEmbeddingResponseObject
    /** The usage information for the request. */
    usage: CreateEmbeddingResponseUsage
}
