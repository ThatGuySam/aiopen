/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { UsageAudioTranscriptionsResultObject } from './usageAudioTranscriptionsResultObject'

/**
 * The aggregated audio transcriptions usage details of the specific time bucket.
 */
export interface UsageAudioTranscriptionsResult {
    object: UsageAudioTranscriptionsResultObject
    /** The number of seconds processed. */
    seconds: number
    /** The count of requests made to the model. */
    num_model_requests: number
    /**
     * When `group_by=project_id`, this field provides the project ID of the grouped usage result.
     * @nullable
     */
    project_id?: string | null
    /**
     * When `group_by=user_id`, this field provides the user ID of the grouped usage result.
     * @nullable
     */
    user_id?: string | null
    /**
     * When `group_by=api_key_id`, this field provides the API key ID of the grouped usage result.
     * @nullable
     */
    api_key_id?: string | null
    /**
     * When `group_by=model`, this field provides the model name of the grouped usage result.
     * @nullable
     */
    model?: string | null
}
