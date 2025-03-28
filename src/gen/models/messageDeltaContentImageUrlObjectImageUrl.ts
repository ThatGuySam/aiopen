/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { MessageDeltaContentImageUrlObjectImageUrlDetail } from './messageDeltaContentImageUrlObjectImageUrlDetail'

export interface MessageDeltaContentImageUrlObjectImageUrl {
    /** The URL of the image, must be a supported image types: jpeg, jpg, png, gif, webp. */
    url?: string
    /** Specifies the detail level of the image. `low` uses fewer tokens, you can opt in to high resolution using `high`. */
    detail?: MessageDeltaContentImageUrlObjectImageUrlDetail
}
