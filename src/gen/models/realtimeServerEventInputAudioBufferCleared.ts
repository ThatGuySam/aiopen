/* eslint-disable jsdoc/check-alignment */

/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { RealtimeServerEventInputAudioBufferClearedType } from './realtimeServerEventInputAudioBufferClearedType'

/**
 * Returned when the input audio buffer is cleared by the client with a
`input_audio_buffer.clear` event.

 */
export interface RealtimeServerEventInputAudioBufferCleared {
    /** The unique ID of the server event. */
    event_id: string
    /** The event type, must be `input_audio_buffer.cleared`. */
    type: RealtimeServerEventInputAudioBufferClearedType
}
