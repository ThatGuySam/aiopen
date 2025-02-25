/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { BatchRequestOutputResponseBody } from './batchRequestOutputResponseBody'

/**
 * @nullable
 */
export type BatchRequestOutputResponse = {
    /** The HTTP status code of the response */
    status_code?: number
    /** An unique identifier for the OpenAI API request. Please include this request ID when contacting support. */
    request_id?: string
    /** The JSON body of the response */
    body?: BatchRequestOutputResponseBody
} | null
