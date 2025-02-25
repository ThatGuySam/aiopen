/* eslint-disable jsdoc/check-alignment */

import type { ChatCompletionRequestMessageContentPartAudioInputAudio } from './chatCompletionRequestMessageContentPartAudioInputAudio'
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { ChatCompletionRequestMessageContentPartAudioType } from './chatCompletionRequestMessageContentPartAudioType'

/**
 * Learn about [audio inputs](/docs/guides/audio).

 */
export interface ChatCompletionRequestMessageContentPartAudio {
    /** The type of the content part. Always `input_audio`. */
    type: ChatCompletionRequestMessageContentPartAudioType
    input_audio: ChatCompletionRequestMessageContentPartAudioInputAudio
}
