import type { RealtimeConversationItem } from './realtimeConversationItem'
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { RealtimeServerEventResponseOutputItemAddedType } from './realtimeServerEventResponseOutputItemAddedType'

/**
 * Returned when a new Item is created during Response generation.
 */
export interface RealtimeServerEventResponseOutputItemAdded {
    /** The unique ID of the server event. */
    event_id: string
    /** The event type, must be `response.output_item.added`. */
    type: RealtimeServerEventResponseOutputItemAddedType
    /** The ID of the Response to which the item belongs. */
    response_id: string
    /** The index of the output item in the Response. */
    output_index: number
    item: RealtimeConversationItem
}
