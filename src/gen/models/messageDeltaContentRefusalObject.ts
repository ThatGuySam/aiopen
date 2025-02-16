/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { MessageDeltaContentRefusalObjectType } from './messageDeltaContentRefusalObjectType'

/**
 * The refusal content that is part of a message.
 */
export interface MessageDeltaContentRefusalObject {
    /** The index of the refusal part in the message. */
    index: number
    /** Always `refusal`. */
    type: MessageDeltaContentRefusalObjectType
    refusal?: string
}
