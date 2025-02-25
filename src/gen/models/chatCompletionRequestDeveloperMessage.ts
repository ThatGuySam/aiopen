/* eslint-disable jsdoc/check-alignment */

/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { ChatCompletionRequestDeveloperMessageContent } from './chatCompletionRequestDeveloperMessageContent'
import type { ChatCompletionRequestDeveloperMessageRole } from './chatCompletionRequestDeveloperMessageRole'

/**
 * Developer-provided instructions that the model should follow, regardless of
messages sent by the user. With o1 models and newer, `developer` messages
replace the previous `system` messages.

 */
export interface ChatCompletionRequestDeveloperMessage {
    /** The contents of the developer message. */
    content: ChatCompletionRequestDeveloperMessageContent
    /** The role of the messages author, in this case `developer`. */
    role: ChatCompletionRequestDeveloperMessageRole
    /** An optional name for the participant. Provides the model information to differentiate between participants of the same role. */
    name?: string
}
