/* eslint-disable jsdoc/check-alignment */

/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { ChatCompletionRequestMessageContentPartTextType } from './chatCompletionRequestMessageContentPartTextType'

/**
 * Learn about [text inputs](/docs/guides/text-generation).

 */
export interface ChatCompletionRequestMessageContentPartText {
  /** The type of the content part. */
  type: ChatCompletionRequestMessageContentPartTextType
  /** The text content. */
  text: string
}
