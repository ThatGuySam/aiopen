/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { RunStepDetailsToolCallsCodeObjectCodeInterpreterOutputsItem } from './runStepDetailsToolCallsCodeObjectCodeInterpreterOutputsItem'

/**
 * The Code Interpreter tool call definition.
 */
export interface RunStepDetailsToolCallsCodeObjectCodeInterpreter {
  /** The input to the Code Interpreter tool call. */
  input: string
  /** The outputs from the Code Interpreter tool call. Code Interpreter can output one or more items, including text (`logs`) or images (`image`). Each of these are represented by a different object type. */
  outputs: RunStepDetailsToolCallsCodeObjectCodeInterpreterOutputsItem[]
}
