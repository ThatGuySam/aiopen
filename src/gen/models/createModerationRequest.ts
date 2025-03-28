/* eslint-disable jsdoc/check-alignment */

/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { CreateModerationRequestInput } from './createModerationRequestInput'
import type { CreateModerationRequestModel } from './createModerationRequestModel'

export interface CreateModerationRequest {
    /**
 Input (or inputs) to classify. Can be a single string, an array of strings, or
an array of multi-modal input objects similar to other models.
 */
    input: CreateModerationRequestInput
    /**
   * The content moderation model you would like to use. Learn more in
[the moderation guide](/docs/guides/moderation), and learn about
available models [here](/docs/models#moderation).

   */
    model?: CreateModerationRequestModel
}
