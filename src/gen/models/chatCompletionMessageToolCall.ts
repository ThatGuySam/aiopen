import type { ChatCompletionMessageToolCallFunction } from './chatCompletionMessageToolCallFunction'
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { ChatCompletionMessageToolCallType } from './chatCompletionMessageToolCallType'

export interface ChatCompletionMessageToolCall {
    /** The ID of the tool call. */
    id: string
    /** The type of the tool. Currently, only `function` is supported. */
    type: ChatCompletionMessageToolCallType
    /** The function that the model called. */
    function: ChatCompletionMessageToolCallFunction
}
