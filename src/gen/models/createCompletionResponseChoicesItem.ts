/* eslint-disable jsdoc/check-alignment */

/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { CreateCompletionResponseChoicesItemFinishReason } from './createCompletionResponseChoicesItemFinishReason'
import type { CreateCompletionResponseChoicesItemLogprobs } from './createCompletionResponseChoicesItemLogprobs'

export interface CreateCompletionResponseChoicesItem {
    /**
 The reason the model stopped generating tokens. This will be `stop` if the model hit a natural stop point or a provided stop sequence,
`length` if the maximum number of tokens specified in the request was reached,
or `content_filter` if content was omitted due to a flag from our content filters.
 */
    finish_reason: CreateCompletionResponseChoicesItemFinishReason
    index: number
    /** @nullable */
    logprobs: CreateCompletionResponseChoicesItemLogprobs
    text: string
}
