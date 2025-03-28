/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { RunToolCallObject } from './runToolCallObject'

/**
 * Details on the tool outputs needed for this run to continue.
 */
export interface RunObjectRequiredActionSubmitToolOutputs {
    /** A list of the relevant tool calls. */
    tool_calls: RunToolCallObject[]
}
