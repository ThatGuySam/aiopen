/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { VectorStoreFileObjectLastErrorCode } from './vectorStoreFileObjectLastErrorCode'

/**
 * The last error associated with this vector store file. Will be `null` if there are no errors.
 * @nullable
 */
export type VectorStoreFileObjectLastError = {
    /** One of `server_error` or `rate_limit_exceeded`. */
    code: VectorStoreFileObjectLastErrorCode
    /** A human-readable description of the error. */
    message: string
} | null
