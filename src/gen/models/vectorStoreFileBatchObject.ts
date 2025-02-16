import type { VectorStoreFileBatchObjectFileCounts } from './vectorStoreFileBatchObjectFileCounts'
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { VectorStoreFileBatchObjectObject } from './vectorStoreFileBatchObjectObject'
import type { VectorStoreFileBatchObjectStatus } from './vectorStoreFileBatchObjectStatus'

/**
 * A batch of files attached to a vector store.
 */
export interface VectorStoreFileBatchObject {
    /** The identifier, which can be referenced in API endpoints. */
    id: string
    /** The object type, which is always `vector_store.file_batch`. */
    object: VectorStoreFileBatchObjectObject
    /** The Unix timestamp (in seconds) for when the vector store files batch was created. */
    created_at: number
    /** The ID of the [vector store](/docs/api-reference/vector-stores/object) that the [File](/docs/api-reference/files) is attached to. */
    vector_store_id: string
    /** The status of the vector store files batch, which can be either `in_progress`, `completed`, `cancelled` or `failed`. */
    status: VectorStoreFileBatchObjectStatus
    file_counts: VectorStoreFileBatchObjectFileCounts
}
