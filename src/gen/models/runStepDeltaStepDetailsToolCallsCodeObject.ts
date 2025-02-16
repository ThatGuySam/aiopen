import type { RunStepDeltaStepDetailsToolCallsCodeObjectCodeInterpreter } from './runStepDeltaStepDetailsToolCallsCodeObjectCodeInterpreter'
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { RunStepDeltaStepDetailsToolCallsCodeObjectType } from './runStepDeltaStepDetailsToolCallsCodeObjectType'

/**
 * Details of the Code Interpreter tool call the run step was involved in.
 */
export interface RunStepDeltaStepDetailsToolCallsCodeObject {
    /** The index of the tool call in the tool calls array. */
    index: number
    /** The ID of the tool call. */
    id?: string
    /** The type of tool call. This is always going to be `code_interpreter` for this type of tool call. */
    type: RunStepDeltaStepDetailsToolCallsCodeObjectType
    /** The Code Interpreter tool call definition. */
    code_interpreter?: RunStepDeltaStepDetailsToolCallsCodeObjectCodeInterpreter
}
