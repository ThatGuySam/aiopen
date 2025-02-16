/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { AuditLogServiceAccountCreatedData } from './auditLogServiceAccountCreatedData'

/**
 * The details for events with this `type`.
 */
export interface AuditLogServiceAccountCreated {
    /** The service account ID. */
    id?: string
    /** The payload used to create the service account. */
    data?: AuditLogServiceAccountCreatedData
}
