/* eslint-disable jsdoc/check-alignment */

import type { Metadata } from './metadata'
import type { ParallelToolCalls } from './parallelToolCalls'
import type { RunCompletionUsage } from './runCompletionUsage'
import type { RunObjectIncompleteDetails } from './runObjectIncompleteDetails'
import type { RunObjectLastError } from './runObjectLastError'
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { RunObjectObject } from './runObjectObject'
import type { RunObjectRequiredAction } from './runObjectRequiredAction'
import type { RunObjectResponseFormat } from './runObjectResponseFormat'
import type { RunObjectStatus } from './runObjectStatus'
import type { RunObjectToolChoice } from './runObjectToolChoice'
import type { RunObjectToolsItem } from './runObjectToolsItem'
import type { RunObjectTruncationStrategy } from './runObjectTruncationStrategy'

/**
 * Represents an execution run on a [thread](/docs/api-reference/threads).
 */
export interface RunObject {
    /** The identifier, which can be referenced in API endpoints. */
    id: string
    /** The object type, which is always `thread.run`. */
    object: RunObjectObject
    /** The Unix timestamp (in seconds) for when the run was created. */
    created_at: number
    /** The ID of the [thread](/docs/api-reference/threads) that was executed on as a part of this run. */
    thread_id: string
    /** The ID of the [assistant](/docs/api-reference/assistants) used for execution of this run. */
    assistant_id: string
    /** The status of the run, which can be either `queued`, `in_progress`, `requires_action`, `cancelling`, `cancelled`, `failed`, `completed`, `incomplete`, or `expired`. */
    status: RunObjectStatus
    /**
   * Details on the action required to continue the run. Will be `null` if no action is required.
   * @nullable
   */
    required_action: RunObjectRequiredAction
    /**
   * The last error associated with this run. Will be `null` if there are no errors.
   * @nullable
   */
    last_error: RunObjectLastError
    /**
   * The Unix timestamp (in seconds) for when the run will expire.
   * @nullable
   */
    expires_at: number | null
    /**
   * The Unix timestamp (in seconds) for when the run was started.
   * @nullable
   */
    started_at: number | null
    /**
   * The Unix timestamp (in seconds) for when the run was cancelled.
   * @nullable
   */
    cancelled_at: number | null
    /**
   * The Unix timestamp (in seconds) for when the run failed.
   * @nullable
   */
    failed_at: number | null
    /**
   * The Unix timestamp (in seconds) for when the run was completed.
   * @nullable
   */
    completed_at: number | null
    /**
   * Details on why the run is incomplete. Will be `null` if the run is not incomplete.
   * @nullable
   */
    incomplete_details: RunObjectIncompleteDetails
    /** The model that the [assistant](/docs/api-reference/assistants) used for this run. */
    model: string
    /** The instructions that the [assistant](/docs/api-reference/assistants) used for this run. */
    instructions: string
    /**
   * The list of tools that the [assistant](/docs/api-reference/assistants) used for this run.
   * @maxItems 20
   */
    tools: RunObjectToolsItem[]
    metadata: Metadata
    usage: RunCompletionUsage
    /**
   * The sampling temperature used for this run. If not set, defaults to 1.
   * @nullable
   */
    temperature?: number | null
    /**
   * The nucleus sampling value used for this run. If not set, defaults to 1.
   * @nullable
   */
    top_p?: number | null
    /**
   * The maximum number of prompt tokens specified to have been used over the course of the run.

   * @minimum 256
   * @nullable
   */
    max_prompt_tokens: number | null
    /**
   * The maximum number of completion tokens specified to have been used over the course of the run.

   * @minimum 256
   * @nullable
   */
    max_completion_tokens: number | null
    truncation_strategy: RunObjectTruncationStrategy
    tool_choice: RunObjectToolChoice
    parallel_tool_calls: ParallelToolCalls
    response_format: RunObjectResponseFormat
}
