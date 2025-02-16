/* eslint-disable jsdoc/check-alignment */

/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { RealtimeClientEventResponseCancelType } from './realtimeClientEventResponseCancelType'

/**
 * Send this event to cancel an in-progress response. The server will respond
with a `response.cancelled` event or an error if there is no response to
cancel.

 */
export interface RealtimeClientEventResponseCancel {
    /** Optional client-generated ID used to identify this event. */
    event_id?: string
    /** The event type, must be `response.cancel`. */
    type: RealtimeClientEventResponseCancelType
    /**
 A specific response ID to cancel - if not provided, will cancel an
in-progress response in the default conversation.
 */
    response_id?: string
}
