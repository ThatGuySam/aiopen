import type { RunObject } from './runObject'
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { RunStreamEventOneOfSevenEvent } from './runStreamEventOneOfSevenEvent'

/**
 * Occurs when a [run](/docs/api-reference/runs/object) moves to a `requires_action` status.
 */
export interface RunStreamEventOneOfSeven {
    event: RunStreamEventOneOfSevenEvent
    data: RunObject
}
