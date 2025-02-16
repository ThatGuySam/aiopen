import type { FineTuningJobEventData } from './fineTuningJobEventData'
import type { FineTuningJobEventLevel } from './fineTuningJobEventLevel'
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { FineTuningJobEventObject } from './fineTuningJobEventObject'
import type { FineTuningJobEventType } from './fineTuningJobEventType'

/**
 * Fine-tuning job event object
 */
export interface FineTuningJobEvent {
    /** The object type, which is always "fine_tuning.job.event". */
    object: FineTuningJobEventObject
    /** The object identifier. */
    id: string
    /** The Unix timestamp (in seconds) for when the fine-tuning job was created. */
    created_at: number
    /** The log level of the event. */
    level: FineTuningJobEventLevel
    /** The message of the event. */
    message: string
    /** The type of event. */
    type?: FineTuningJobEventType
    /** The data associated with the event. */
    data?: FineTuningJobEventData
}
