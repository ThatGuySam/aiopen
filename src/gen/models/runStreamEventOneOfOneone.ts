import type { RunObject } from './runObject'
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { RunStreamEventOneOfOneoneEvent } from './runStreamEventOneOfOneoneEvent'

/**
 * Occurs when a [run](/docs/api-reference/runs/object) ends with status `incomplete`.
 */
export interface RunStreamEventOneOfOneone {
    event: RunStreamEventOneOfOneoneEvent
    data: RunObject
}
