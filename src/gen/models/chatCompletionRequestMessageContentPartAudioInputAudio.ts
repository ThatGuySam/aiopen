/* eslint-disable jsdoc/check-alignment */

/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { ChatCompletionRequestMessageContentPartAudioInputAudioFormat } from './chatCompletionRequestMessageContentPartAudioInputAudioFormat'

export interface ChatCompletionRequestMessageContentPartAudioInputAudio {
    /** Base64 encoded audio data. */
    data: string
    /**
  The format of the encoded audio data. Currently supports "wav" and "mp3".
 */
    format: ChatCompletionRequestMessageContentPartAudioInputAudioFormat
}
