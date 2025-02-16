/* eslint-disable jsdoc/check-alignment */

/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { SubmitToolOutputsRunRequestToolOutputsItem } from './submitToolOutputsRunRequestToolOutputsItem'

export interface SubmitToolOutputsRunRequest {
    /** A list of tools for which the outputs are being submitted. */
    tool_outputs: SubmitToolOutputsRunRequestToolOutputsItem[]
    /**
   * If `true`, returns a stream of events that happen during the Run as server-sent events, terminating when the Run enters a terminal state with a `data: [DONE]` message.

   * @nullable
   */
    stream?: boolean | null
}
