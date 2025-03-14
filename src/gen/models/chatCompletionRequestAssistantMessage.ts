/* eslint-disable jsdoc/check-alignment */

import type { ChatCompletionMessageToolCalls } from './chatCompletionMessageToolCalls'
import type { ChatCompletionRequestAssistantMessageAudio } from './chatCompletionRequestAssistantMessageAudio'
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { ChatCompletionRequestAssistantMessageContent } from './chatCompletionRequestAssistantMessageContent'
import type { ChatCompletionRequestAssistantMessageFunctionCall } from './chatCompletionRequestAssistantMessageFunctionCall'
import type { ChatCompletionRequestAssistantMessageRole } from './chatCompletionRequestAssistantMessageRole'

/**
 * Messages sent by the model in response to user messages.

 */
export interface ChatCompletionRequestAssistantMessage {
    /**
   * The contents of the assistant message. Required unless `tool_calls` or `function_call` is specified.

   * @nullable
   */
    content?: ChatCompletionRequestAssistantMessageContent
    /**
   * The refusal message by the assistant.
   * @nullable
   */
    refusal?: string | null
    /** The role of the messages author, in this case `assistant`. */
    role: ChatCompletionRequestAssistantMessageRole
    /** An optional name for the participant. Provides the model information to differentiate between participants of the same role. */
    name?: string
    /**
   * Data about a previous audio response from the model.
[Learn more](/docs/guides/audio).

   * @nullable
   */
    audio?: ChatCompletionRequestAssistantMessageAudio
    tool_calls?: ChatCompletionMessageToolCalls
    /**
   * Deprecated and replaced by `tool_calls`. The name and arguments of a function that should be called, as generated by the model.
   * @deprecated
   * @nullable
   */
    function_call?: ChatCompletionRequestAssistantMessageFunctionCall
}
