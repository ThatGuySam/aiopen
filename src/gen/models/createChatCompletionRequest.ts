/* eslint-disable jsdoc/check-alignment */

import type { ChatCompletionFunctions } from './chatCompletionFunctions'
import type { ChatCompletionModalities } from './chatCompletionModalities'
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { ChatCompletionRequestMessage } from './chatCompletionRequestMessage'
import type { ChatCompletionStreamOptions } from './chatCompletionStreamOptions'
import type { ChatCompletionTool } from './chatCompletionTool'
import type { ChatCompletionToolChoiceOption } from './chatCompletionToolChoiceOption'
import type { CreateChatCompletionRequestAudio } from './createChatCompletionRequestAudio'
import type { CreateChatCompletionRequestFunctionCall } from './createChatCompletionRequestFunctionCall'
import type { CreateChatCompletionRequestLogitBias } from './createChatCompletionRequestLogitBias'
import type { CreateChatCompletionRequestModel } from './createChatCompletionRequestModel'
import type { CreateChatCompletionRequestPrediction } from './createChatCompletionRequestPrediction'
import type { CreateChatCompletionRequestResponseFormat } from './createChatCompletionRequestResponseFormat'
import type { CreateChatCompletionRequestServiceTier } from './createChatCompletionRequestServiceTier'
import type { CreateChatCompletionRequestStop } from './createChatCompletionRequestStop'
import type { Metadata } from './metadata'
import type { ParallelToolCalls } from './parallelToolCalls'
import type { ReasoningEffort } from './reasoningEffort'

export interface CreateChatCompletionRequest {
  /**
   * A list of messages comprising the conversation so far. Depending on the
[model](/docs/models) you use, different message types (modalities) are
supported, like [text](/docs/guides/text-generation),
[images](/docs/guides/vision), and [audio](/docs/guides/audio).

   * @minItems 1
   */
  messages: ChatCompletionRequestMessage[]
  /** ID of the model to use. See the [model endpoint compatibility](/docs/models#model-endpoint-compatibility) table for details on which models work with the Chat API. */
  model: CreateChatCompletionRequestModel
  /**
   * Whether or not to store the output of this chat completion request for
use in our [model distillation](/docs/guides/distillation) or
[evals](/docs/guides/evals) products.

   * @nullable
   */
  store?: boolean | null
  reasoning_effort?: ReasoningEffort
  metadata?: Metadata
  /**
   * Number between -2.0 and 2.0. Positive values penalize new tokens based on
their existing frequency in the text so far, decreasing the model's
likelihood to repeat the same line verbatim.

   * @minimum -2
   * @maximum 2
   * @nullable
   */
  frequency_penalty?: number | null
  /**
   * Modify the likelihood of specified tokens appearing in the completion.

Accepts a JSON object that maps tokens (specified by their token ID in the
tokenizer) to an associated bias value from -100 to 100. Mathematically,
the bias is added to the logits generated by the model prior to sampling.
The exact effect will vary per model, but values between -1 and 1 should
decrease or increase likelihood of selection; values like -100 or 100
should result in a ban or exclusive selection of the relevant token.

   * @nullable
   */
  logit_bias?: CreateChatCompletionRequestLogitBias
  /**
   * Whether to return log probabilities of the output tokens or not. If true,
returns the log probabilities of each output token returned in the
`content` of `message`.

   * @nullable
   */
  logprobs?: boolean | null
  /**
   * An integer between 0 and 20 specifying the number of most likely tokens to
return at each token position, each with an associated log probability.
`logprobs` must be set to `true` if this parameter is used.

   * @minimum 0
   * @maximum 20
   * @nullable
   */
  top_logprobs?: number | null
  /**
   * The maximum number of [tokens](/tokenizer) that can be generated in the
chat completion. This value can be used to control
[costs](https://openai.com/api/pricing/) for text generated via API.

This value is now deprecated in favor of `max_completion_tokens`, and is
not compatible with [o1 series models](/docs/guides/reasoning).

   * @deprecated
   * @nullable
   */
  max_tokens?: number | null
  /**
   * An upper bound for the number of tokens that can be generated for a completion, including visible output tokens and [reasoning tokens](/docs/guides/reasoning).

   * @nullable
   */
  max_completion_tokens?: number | null
  /**
   * How many chat completion choices to generate for each input message. Note that you will be charged based on the number of generated tokens across all of the choices. Keep `n` as `1` to minimize costs.
   * @minimum 1
   * @maximum 128
   * @nullable
   */
  n?: number | null
  modalities?: ChatCompletionModalities
  /**
   * Configuration for a [Predicted Output](/docs/guides/predicted-outputs),
which can greatly improve response times when large parts of the model
response are known ahead of time. This is most common when you are
regenerating a file with only minor changes to most of the content.

   * @nullable
   */
  prediction?: CreateChatCompletionRequestPrediction
  /**
   * Parameters for audio output. Required when audio output is requested with
`modalities: ["audio"]`. [Learn more](/docs/guides/audio).

   * @nullable
   */
  audio?: CreateChatCompletionRequestAudio
  /**
   * Number between -2.0 and 2.0. Positive values penalize new tokens based on
whether they appear in the text so far, increasing the model's likelihood
to talk about new topics.

   * @minimum -2
   * @maximum 2
   * @nullable
   */
  presence_penalty?: number | null
  /**
 An object specifying the format that the model must output.

Setting to `{ "type": "json_schema", "json_schema": {...} }` enables
Structured Outputs which ensures the model will match your supplied JSON
schema. Learn more in the [Structured Outputs
guide](/docs/guides/structured-outputs).

Setting to `{ "type": "json_object" }` enables JSON mode, which ensures
the message the model generates is valid JSON.

*Important:** when using JSON mode, you **must** also instruct the model
to produce JSON yourself via a system or user message. Without this, the
model may generate an unending stream of whitespace until the generation
reaches the token limit, resulting in a long-running and seemingly "stuck"
request. Also note that the message content may be partially cut off if
`finish_reason="length"`, which indicates the generation exceeded
`max_tokens` or the conversation exceeded the max context length.
 */
  response_format?: CreateChatCompletionRequestResponseFormat
  /**
   * This feature is in Beta.
If specified, our system will make a best effort to sample deterministically, such that repeated requests with the same `seed` and parameters should return the same result.
Determinism is not guaranteed, and you should refer to the `system_fingerprint` response parameter to monitor changes in the backend.

   * @nullable
   */
  seed?: number | null
  /**
   * Specifies the latency tier to use for processing the request. This parameter is relevant for customers subscribed to the scale tier service:
  - If set to 'auto', and the Project is Scale tier enabled, the system will utilize scale tier credits until they are exhausted.
  - If set to 'auto', and the Project is not Scale tier enabled, the request will be processed using the default service tier with a lower uptime SLA and no latency guarantee.
  - If set to 'default', the request will be processed using the default service tier with a lower uptime SLA and no latency guarantee.
  - When not set, the default behavior is 'auto'.

   * @nullable
   */
  service_tier?: CreateChatCompletionRequestServiceTier
  /**
  Up to 4 sequences where the API will stop generating further tokens.
 */
  stop?: CreateChatCompletionRequestStop
  /**
   * If set, partial message deltas will be sent, like in ChatGPT. Tokens will be sent as data-only [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format) as they become available, with the stream terminated by a `data: [DONE]` message. [Example Python code](https://cookbook.openai.com/examples/how_to_stream_completions).

   * @nullable
   */
  stream?: boolean | null
  stream_options?: ChatCompletionStreamOptions
  /**
   * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
We generally recommend altering this or `top_p` but not both.

   * @minimum 0
   * @maximum 2
   * @nullable
   */
  temperature?: number | null
  /**
   * An alternative to sampling with temperature, called nucleus sampling,
where the model considers the results of the tokens with top_p probability
mass. So 0.1 means only the tokens comprising the top 10% probability mass
are considered.

We generally recommend altering this or `temperature` but not both.

   * @minimum 0
   * @maximum 1
   * @nullable
   */
  top_p?: number | null
  /**
  A list of tools the model may call. Currently, only functions are supported as a tool. Use this to provide a list of functions the model may generate JSON inputs for. A max of 128 functions are supported.
 */
  tools?: ChatCompletionTool[]
  tool_choice?: ChatCompletionToolChoiceOption
  parallel_tool_calls?: ParallelToolCalls
  /**
  A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices#end-user-ids).
 */
  user?: string
  /**
   * Deprecated in favor of `tool_choice`.

Controls which (if any) function is called by the model.

`none` means the model will not call a function and instead generates a
message.

`auto` means the model can pick between generating a message or calling a
function.

Specifying a particular function via `{"name": "my_function"}` forces the
model to call that function.

`none` is the default when no functions are present. `auto` is the default
if functions are present.

   * @deprecated
   */
  function_call?: CreateChatCompletionRequestFunctionCall
  /**
   * Deprecated in favor of `tools`.

A list of functions the model may generate JSON inputs for.

   * @deprecated
   * @minItems 1
   * @maxItems 128
   */
  functions?: ChatCompletionFunctions[]
}
