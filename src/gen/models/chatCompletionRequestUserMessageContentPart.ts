import type { ChatCompletionRequestMessageContentPartAudio } from './chatCompletionRequestMessageContentPartAudio'
import type { ChatCompletionRequestMessageContentPartImage } from './chatCompletionRequestMessageContentPartImage'
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { ChatCompletionRequestMessageContentPartText } from './chatCompletionRequestMessageContentPartText'

export type ChatCompletionRequestUserMessageContentPart = ChatCompletionRequestMessageContentPartText | ChatCompletionRequestMessageContentPartImage | ChatCompletionRequestMessageContentPartAudio
