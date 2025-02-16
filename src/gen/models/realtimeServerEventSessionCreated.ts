/* eslint-disable jsdoc/check-alignment */

/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { RealtimeServerEventSessionCreatedType } from './realtimeServerEventSessionCreatedType'
import type { RealtimeSession } from './realtimeSession'

/**
 * Returned when a Session is created. Emitted automatically when a new
connection is established as the first server event. This event will contain
the default Session configuration.

 */
export interface RealtimeServerEventSessionCreated {
    /** The unique ID of the server event. */
    event_id: string
    /** The event type, must be `session.created`. */
    type: RealtimeServerEventSessionCreatedType
    session: RealtimeSession
}
