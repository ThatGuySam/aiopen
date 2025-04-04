/* eslint-disable jsdoc/check-alignment */

import type { RealtimeResponse } from './realtimeResponse'
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { RealtimeServerEventResponseCreatedType } from './realtimeServerEventResponseCreatedType'

/**
 * Returned when a new Response is created. The first event of response creation,
where the response is in an initial state of `in_progress`.

 */
export interface RealtimeServerEventResponseCreated {
    /** The unique ID of the server event. */
    event_id: string
    /** The event type, must be `response.created`. */
    type: RealtimeServerEventResponseCreatedType
    response: RealtimeResponse
}
