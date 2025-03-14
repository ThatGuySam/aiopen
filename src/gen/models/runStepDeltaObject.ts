/* eslint-disable jsdoc/check-alignment */

import type { RunStepDeltaObjectDelta } from './runStepDeltaObjectDelta'
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { RunStepDeltaObjectObject } from './runStepDeltaObjectObject'

/**
 * Represents a run step delta i.e. any changed fields on a run step during streaming.

 */
export interface RunStepDeltaObject {
    /** The identifier of the run step, which can be referenced in API endpoints. */
    id: string
    /** The object type, which is always `thread.run.step.delta`. */
    object: RunStepDeltaObjectObject
    /** The delta containing the fields that have changed on the run step. */
    delta: RunStepDeltaObjectDelta
}
