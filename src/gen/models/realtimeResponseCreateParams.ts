/* eslint-disable jsdoc/check-alignment */

import type { Metadata } from './metadata'
import type { RealtimeConversationItemWithReference } from './realtimeConversationItemWithReference'
import type { RealtimeResponseCreateParamsConversation } from './realtimeResponseCreateParamsConversation'
import type { RealtimeResponseCreateParamsMaxResponseOutputTokens } from './realtimeResponseCreateParamsMaxResponseOutputTokens'
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { RealtimeResponseCreateParamsModalitiesItem } from './realtimeResponseCreateParamsModalitiesItem'
import type { RealtimeResponseCreateParamsOutputAudioFormat } from './realtimeResponseCreateParamsOutputAudioFormat'
import type { RealtimeResponseCreateParamsToolsItem } from './realtimeResponseCreateParamsToolsItem'
import type { RealtimeResponseCreateParamsVoice } from './realtimeResponseCreateParamsVoice'

/**
 * Create a new Realtime response with these parameters
 */
export interface RealtimeResponseCreateParams {
    /**
 The set of modalities the model can respond with. To disable audio,
set this to ["text"].
 */
    modalities?: RealtimeResponseCreateParamsModalitiesItem[]
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
    voice?: RealtimeResponseCreateParamsVoice
    /**
  The format of output audio. Options are `pcm16`, `g711_ulaw`, or `g711_alaw`.
 */
    output_audio_format?: RealtimeResponseCreateParamsOutputAudioFormat
    /** Tools (functions) available to the model. */
    tools?: RealtimeResponseCreateParamsToolsItem[]
    /**
 How the model chooses tools. Options are `auto`, `none`, `required`, or
specify a function, like `{"type": "function", "function": {"name": "my_function"}}`.
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
    max_response_output_tokens?: RealtimeResponseCreateParamsMaxResponseOutputTokens
    /**
 Controls which conversation the response is added to. Currently supports
`auto` and `none`, with `auto` as the default value. The `auto` value
means that the contents of the response will be added to the default
conversation. Set this to `none` to create an out-of-band response which
will not add items to default conversation.
 */
    conversation?: RealtimeResponseCreateParamsConversation
    metadata?: Metadata
    /**
 Input items to include in the prompt for the model. Using this field
creates a new context for this Response instead of using the default
conversation. An empty array `[]` will clear the context for this Response.
Note that this can include references to items from the default conversation.
 */
    input?: RealtimeConversationItemWithReference[]
}
