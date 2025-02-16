import type { RunStepDetailsToolCallsFunctionObjectFunction } from './runStepDetailsToolCallsFunctionObjectFunction'
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { RunStepDetailsToolCallsFunctionObjectType } from './runStepDetailsToolCallsFunctionObjectType'

export interface RunStepDetailsToolCallsFunctionObject {
  /** The ID of the tool call object. */
  id: string
  /** The type of tool call. This is always going to be `function` for this type of tool call. */
  type: RunStepDetailsToolCallsFunctionObjectType
  /** The definition of the function that was called. */
  function: RunStepDetailsToolCallsFunctionObjectFunction
}
