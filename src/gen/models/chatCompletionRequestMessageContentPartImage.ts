/* eslint-disable jsdoc/check-alignment */

import type { ChatCompletionRequestMessageContentPartImageImageUrl } from './chatCompletionRequestMessageContentPartImageImageUrl'
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { ChatCompletionRequestMessageContentPartImageType } from './chatCompletionRequestMessageContentPartImageType'

/**
 * Learn about [image inputs](/docs/guides/vision).

 */
export interface ChatCompletionRequestMessageContentPartImage {
  /** The type of the content part. */
  type: ChatCompletionRequestMessageContentPartImageType
  image_url: ChatCompletionRequestMessageContentPartImageImageUrl
}
