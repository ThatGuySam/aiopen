/* eslint-disable jsdoc/check-alignment */

import type { RealtimeServerEventResponseContentPartAddedPart } from './realtimeServerEventResponseContentPartAddedPart'
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { RealtimeServerEventResponseContentPartAddedType } from './realtimeServerEventResponseContentPartAddedType'

/**
 * Returned when a new content part is added to an assistant message item during
response generation.

 */
export interface RealtimeServerEventResponseContentPartAdded {
    /** The unique ID of the server event. */
    event_id: string
    /** The event type, must be `response.content_part.added`. */
    type: RealtimeServerEventResponseContentPartAddedType
    /** The ID of the response. */
    response_id: string
    /** The ID of the item to which the content part was added. */
    item_id: string
    /** The index of the output item in the response. */
    output_index: number
    /** The index of the content part in the item's content array. */
    content_index: number
    /** The content part that was added. */
    part: RealtimeServerEventResponseContentPartAddedPart
}
