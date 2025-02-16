import type { RunToolCallObjectFunction } from './runToolCallObjectFunction'
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { RunToolCallObjectType } from './runToolCallObjectType'

/**
 * Tool call objects
 */
export interface RunToolCallObject {
  /** The ID of the tool call. This ID must be referenced when you submit the tool outputs in using the [Submit tool outputs to run](/docs/api-reference/runs/submitToolOutputs) endpoint. */
  id: string
  /** The type of tool call the output is required for. For now, this is always `function`. */
  type: RunToolCallObjectType
  /** The function definition. */
  function: RunToolCallObjectFunction
}
