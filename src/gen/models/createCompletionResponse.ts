/* eslint-disable jsdoc/check-alignment */

import type { CompletionUsage } from './completionUsage'
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { CreateCompletionResponseChoicesItem } from './createCompletionResponseChoicesItem'
import type { CreateCompletionResponseObject } from './createCompletionResponseObject'

/**
 * Represents a completion response from the API. Note: both the streamed and non-streamed response objects share the same shape (unlike the chat endpoint).

 */
export interface CreateCompletionResponse {
    /** A unique identifier for the completion. */
    id: string
    /** The list of completion choices the model generated for the input prompt. */
    choices: CreateCompletionResponseChoicesItem[]
    /** The Unix timestamp (in seconds) of when the completion was created. */
    created: number
    /** The model used for completion. */
    model: string
    /**
 This fingerprint represents the backend configuration that the model runs with.

Can be used in conjunction with the `seed` request parameter to understand when backend changes have been made that might impact determinism.
 */
    system_fingerprint?: string
    /** The object type, which is always "text_completion" */
    object: CreateCompletionResponseObject
    usage?: CompletionUsage
}
