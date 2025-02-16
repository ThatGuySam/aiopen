import type { BatchErrors } from './batchErrors'
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { BatchObject } from './batchObject'
import type { BatchRequestCounts } from './batchRequestCounts'
import type { BatchStatus } from './batchStatus'
import type { Metadata } from './metadata'

export interface Batch {
    id: string
    /** The object type, which is always `batch`. */
    object: BatchObject
    /** The OpenAI API endpoint used by the batch. */
    endpoint: string
    errors?: BatchErrors
    /** The ID of the input file for the batch. */
    input_file_id: string
    /** The time frame within which the batch should be processed. */
    completion_window: string
    /** The current status of the batch. */
    status: BatchStatus
    /** The ID of the file containing the outputs of successfully executed requests. */
    output_file_id?: string
    /** The ID of the file containing the outputs of requests with errors. */
    error_file_id?: string
    /** The Unix timestamp (in seconds) for when the batch was created. */
    created_at: number
    /** The Unix timestamp (in seconds) for when the batch started processing. */
    in_progress_at?: number
    /** The Unix timestamp (in seconds) for when the batch will expire. */
    expires_at?: number
    /** The Unix timestamp (in seconds) for when the batch started finalizing. */
    finalizing_at?: number
    /** The Unix timestamp (in seconds) for when the batch was completed. */
    completed_at?: number
    /** The Unix timestamp (in seconds) for when the batch failed. */
    failed_at?: number
    /** The Unix timestamp (in seconds) for when the batch expired. */
    expired_at?: number
    /** The Unix timestamp (in seconds) for when the batch started cancelling. */
    cancelling_at?: number
    /** The Unix timestamp (in seconds) for when the batch was cancelled. */
    cancelled_at?: number
    /** The request counts for different statuses within the batch. */
    request_counts?: BatchRequestCounts
    metadata?: Metadata
}
