/* eslint-disable jsdoc/check-alignment */

/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { RealtimeServerEventResponseTextDoneType } from './realtimeServerEventResponseTextDoneType'

/**
 * Returned when the text value of a "text" content part is done streaming. Also
emitted when a Response is interrupted, incomplete, or cancelled.

 */
export interface RealtimeServerEventResponseTextDone {
    /** The unique ID of the server event. */
    event_id: string
    /** The event type, must be `response.text.done`. */
    type: RealtimeServerEventResponseTextDoneType
    /** The ID of the response. */
    response_id: string
    /** The ID of the item. */
    item_id: string
    /** The index of the output item in the response. */
    output_index: number
    /** The index of the content part in the item's content array. */
    content_index: number
    /** The final text content. */
    text: string
}
