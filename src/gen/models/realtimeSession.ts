/* eslint-disable jsdoc/check-alignment */

import type { RealtimeSessionInputAudioFormat } from './realtimeSessionInputAudioFormat'
import type { RealtimeSessionInputAudioTranscription } from './realtimeSessionInputAudioTranscription'
import type { RealtimeSessionMaxResponseOutputTokens } from './realtimeSessionMaxResponseOutputTokens'
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { RealtimeSessionModalitiesItem } from './realtimeSessionModalitiesItem'
import type { RealtimeSessionModel } from './realtimeSessionModel'
import type { RealtimeSessionOutputAudioFormat } from './realtimeSessionOutputAudioFormat'
import type { RealtimeSessionToolsItem } from './realtimeSessionToolsItem'
import type { RealtimeSessionTurnDetection } from './realtimeSessionTurnDetection'
import type { RealtimeSessionVoice } from './realtimeSessionVoice'

/**
 * Realtime session object configuration.
 */
export interface RealtimeSession {
  /**
  Unique identifier for the session object.
 */
  id?: string
  /**
 The set of modalities the model can respond with. To disable audio,
set this to ["text"].
 */
  modalities?: RealtimeSessionModalitiesItem[]
  /**
  The Realtime model used for this session.
 */
  model?: RealtimeSessionModel
  /**
 The default system instructions (i.e. system message) prepended to model
calls. This field allows the client to guide the model on desired
responses. The model can be instructed on response content and format,
(e.g. "be extremely succinct", "act friendly", "here are examples of good
responses") and on audio behavior (e.g. "talk quickly", "inject emotion
into your voice", "laugh frequently"). The instructions are not guaranteed
to be followed by the model, but they provide guidance to the model on the
desired behavior.

Note that the server sets default instructions which will be used if this
field is not set and are visible in the `session.created` event at the
start of the session.
 */
  instructions?: string
  /**
 The voice the model uses to respond. Voice cannot be changed during the
session once the model has responded with audio at least once. Current
voice options are `alloy`, `ash`, `ballad`, `coral`, `echo` `sage`,
`shimmer` and `verse`.
 */
  voice?: RealtimeSessionVoice
  /**
 The format of input audio. Options are `pcm16`, `g711_ulaw`, or `g711_alaw`.
For `pcm16`, input audio must be 16-bit PCM at a 24kHz sample rate,
single channel (mono), and little-endian byte order.
 */
  input_audio_format?: RealtimeSessionInputAudioFormat
  /**
 The format of output audio. Options are `pcm16`, `g711_ulaw`, or `g711_alaw`.
For `pcm16`, output audio is sampled at a rate of 24kHz.
 */
  output_audio_format?: RealtimeSessionOutputAudioFormat
  /**
 Configuration for input audio transcription, defaults to off and can be
set to `null` to turn off once on. Input audio transcription is not native
to the model, since the model consumes audio directly. Transcription runs
asynchronously through Whisper and should be treated as rough guidance
rather than the representation understood by the model.
 */
  input_audio_transcription?: RealtimeSessionInputAudioTranscription
  /**
   * Configuration for turn detection. Can be set to `null` to turn off. Server
VAD means that the model will detect the start and end of speech based on
audio volume and respond at the end of user speech.

   * @nullable
   */
  turn_detection?: RealtimeSessionTurnDetection
  /** Tools (functions) available to the model. */
  tools?: RealtimeSessionToolsItem[]
  /**
 How the model chooses tools. Options are `auto`, `none`, `required`, or
specify a function.
 */
  tool_choice?: string
  /**
  Sampling temperature for the model, limited to [0.6, 1.2]. Defaults to 0.8.
 */
  temperature?: number
  /**
 Maximum number of output tokens for a single assistant response,
inclusive of tool calls. Provide an integer between 1 and 4096 to
limit output tokens, or `inf` for the maximum available tokens for a
given model. Defaults to `inf`.
 */
  max_response_output_tokens?: RealtimeSessionMaxResponseOutputTokens
}
