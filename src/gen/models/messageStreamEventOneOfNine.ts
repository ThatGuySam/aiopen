import type { MessageObject } from './messageObject'
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { MessageStreamEventOneOfNineEvent } from './messageStreamEventOneOfNineEvent'

/**
 * Occurs when a [message](/docs/api-reference/messages/object) ends before it is completed.
 */
export interface MessageStreamEventOneOfNine {
    event: MessageStreamEventOneOfNineEvent
    data: MessageObject
}
