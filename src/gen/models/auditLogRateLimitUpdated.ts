/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { AuditLogRateLimitUpdatedChangesRequested } from './auditLogRateLimitUpdatedChangesRequested'

/**
 * The details for events with this `type`.
 */
export interface AuditLogRateLimitUpdated {
    /** The rate limit ID */
    id?: string
    /** The payload used to update the rate limits. */
    changes_requested?: AuditLogRateLimitUpdatedChangesRequested
}
