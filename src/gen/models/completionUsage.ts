/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { CompletionUsageCompletionTokensDetails } from './completionUsageCompletionTokensDetails'
import type { CompletionUsagePromptTokensDetails } from './completionUsagePromptTokensDetails'

/**
 * Usage statistics for the completion request.
 */
export interface CompletionUsage {
    /** Number of tokens in the generated completion. */
    completion_tokens: number
    /** Number of tokens in the prompt. */
    prompt_tokens: number
    /** Total number of tokens used in the request (prompt + completion). */
    total_tokens: number
    /** Breakdown of tokens used in a completion. */
    completion_tokens_details?: CompletionUsageCompletionTokensDetails
    /** Breakdown of tokens used in the prompt. */
    prompt_tokens_details?: CompletionUsagePromptTokensDetails
}
