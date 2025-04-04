import type { RunObject } from './runObject'
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { RunStreamEventOneOfThreeEvent } from './runStreamEventOneOfThreeEvent'

/**
 * Occurs when a [run](/docs/api-reference/runs/object) moves to a `queued` status.
 */
export interface RunStreamEventOneOfThree {
    event: RunStreamEventOneOfThreeEvent
    data: RunObject
}
