/* eslint-disable jsdoc/check-alignment */

/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { CreateSpeechRequestModel } from './createSpeechRequestModel'
import type { CreateSpeechRequestResponseFormat } from './createSpeechRequestResponseFormat'
import type { CreateSpeechRequestVoice } from './createSpeechRequestVoice'

export interface CreateSpeechRequest {
    /**
  One of the available [TTS models](/docs/models#tts): `tts-1` or `tts-1-hd`
 */
    model: CreateSpeechRequestModel
    /**
   * The text to generate audio for. The maximum length is 4096 characters.
   * @maxLength 4096
   */
    input: string
    /** The voice to use when generating the audio. Supported voices are `alloy`, `ash`, `coral`, `echo`, `fable`, `onyx`, `nova`, `sage` and `shimmer`. Previews of the voices are available in the [Text to speech guide](/docs/guides/text-to-speech#voice-options). */
    voice: CreateSpeechRequestVoice
    /** The format to audio in. Supported formats are `mp3`, `opus`, `aac`, `flac`, `wav`, and `pcm`. */
    response_format?: CreateSpeechRequestResponseFormat
    /**
   * The speed of the generated audio. Select a value from `0.25` to `4.0`. `1.0` is the default.
   * @minimum 0.25
   * @maximum 4
   */
    speed?: number
}
