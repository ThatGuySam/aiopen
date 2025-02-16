/* eslint-disable jsdoc/check-alignment */

/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { RealtimeClientEventResponseCreateType } from './realtimeClientEventResponseCreateType'
import type { RealtimeResponseCreateParams } from './realtimeResponseCreateParams'

/**
 * This event instructs the server to create a Response, which means triggering
model inference. When in Server VAD mode, the server will create Responses
automatically.

A Response will include at least one Item, and may have two, in which case
the second will be a function call. These Items will be appended to the
conversation history.

The server will respond with a `response.created` event, events for Items
and content created, and finally a `response.done` event to indicate the
Response is complete.

The `response.create` event includes inference configuration like
`instructions`, and `temperature`. These fields will override the Session's
configuration for this Response only.

 */
export interface RealtimeClientEventResponseCreate {
    /** Optional client-generated ID used to identify this event. */
    event_id?: string
    /** The event type, must be `response.create`. */
    type: RealtimeClientEventResponseCreateType
    response?: RealtimeResponseCreateParams
}
