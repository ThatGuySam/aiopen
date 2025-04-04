import type { CreateModerationRequestInputOneOfItemOneOfImageUrl } from './createModerationRequestInputOneOfItemOneOfImageUrl'
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { CreateModerationRequestInputOneOfItemOneOfType } from './createModerationRequestInputOneOfItemOneOfType'

/**
 * An object describing an image to classify.
 */
export interface CreateModerationRequestInputOneOfItemOneOf {
    /** Always `image_url`. */
    type: CreateModerationRequestInputOneOfItemOneOfType
    /** Contains either an image URL or a data URL for a base64 encoded image. */
    image_url: CreateModerationRequestInputOneOfItemOneOfImageUrl
}
