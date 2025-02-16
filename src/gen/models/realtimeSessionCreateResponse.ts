/* eslint-disable jsdoc/check-alignment */

/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { RealtimeSessionCreateResponseClientSecret } from './realtimeSessionCreateResponseClientSecret'
import type { RealtimeSessionCreateResponseInputAudioTranscription } from './realtimeSessionCreateResponseInputAudioTranscription'
import type { RealtimeSessionCreateResponseMaxResponseOutputTokens } from './realtimeSessionCreateResponseMaxResponseOutputTokens'
import type { RealtimeSessionCreateResponseModalitiesItem } from './realtimeSessionCreateResponseModalitiesItem'
import type { RealtimeSessionCreateResponseToolsItem } from './realtimeSessionCreateResponseToolsItem'
import type { RealtimeSessionCreateResponseTurnDetection } from './realtimeSessionCreateResponseTurnDetection'
import type { RealtimeSessionCreateResponseVoice } from './realtimeSessionCreateResponseVoice'

/**
 * A new Realtime session configuration, with an ephermeral key. Default TTL
for keys is one minute.

 */
export interface RealtimeSessionCreateResponse {
  /** Ephemeral key returned by the API. */
  client_secret: RealtimeSessionCreateResponseClientSecret
  /**
 The set of modalities the model can respond with. To disable audio,
set this to ["text"].
 */
  modalities?: RealtimeSessionCreateResponseModalitiesItem[]
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
  voice?: RealtimeSessionCreateResponseVoice
  /**
  The format of input audio. Options are `pcm16`, `g711_ulaw`, or `g711_alaw`.
 */
  input_audio_format?: string
  /**
  The format of output audio. Options are `pcm16`, `g711_ulaw`, or `g711_alaw`.
 */
  output_audio_format?: string
  /**
 Configuration for input audio transcription, defaults to off and can be
set to `null` to turn off once on. Input audio transcription is not native
to the model, since the model consumes audio directly. Transcription runs
asynchronously through Whisper and should be treated as rough guidance
rather than the representation understood by the model.
 */
  input_audio_transcription?: RealtimeSessionCreateResponseInputAudioTranscription
  /**
 Configuration for turn detection. Can be set to `null` to turn off. Server
VAD means that the model will detect the start and end of speech based on
audio volume and respond at the end of user speech.
 */
  turn_detection?: RealtimeSessionCreateResponseTurnDetection
  /** Tools (functions) available to the model. */
  tools?: RealtimeSessionCreateResponseToolsItem[]
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
  max_response_output_tokens?: RealtimeSessionCreateResponseMaxResponseOutputTokens
}
