/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { AuditLogActorUser } from './auditLogActorUser'

/**
 * The session in which the audit logged action was performed.
 */
export interface AuditLogActorSession {
  user?: AuditLogActorUser
  /** The IP address from which the action was performed. */
  ip_address?: string
}
