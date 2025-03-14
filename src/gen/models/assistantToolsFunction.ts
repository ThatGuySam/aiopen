/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { AssistantToolsFunctionType } from './assistantToolsFunctionType'
import type { FunctionObject } from './functionObject'

export interface AssistantToolsFunction {
    /** The type of tool being defined: `function` */
    type: AssistantToolsFunctionType
    function: FunctionObject
}
