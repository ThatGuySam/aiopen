/* eslint-disable jsdoc/check-alignment */

import type { RealtimeResponse } from './realtimeResponse'
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { RealtimeServerEventResponseDoneType } from './realtimeServerEventResponseDoneType'

/**
 * Returned when a Response is done streaming. Always emitted, no matter the
final state. The Response object included in the `response.done` event will
include all output Items in the Response but will omit the raw audio data.

 */
export interface RealtimeServerEventResponseDone {
    /** The unique ID of the server event. */
    event_id: string
    /** The event type, must be `response.done`. */
    type: RealtimeServerEventResponseDoneType
    response: RealtimeResponse
}
