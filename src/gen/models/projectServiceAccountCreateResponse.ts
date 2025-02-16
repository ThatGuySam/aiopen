import type { ProjectServiceAccountApiKey } from './projectServiceAccountApiKey'
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { ProjectServiceAccountCreateResponseObject } from './projectServiceAccountCreateResponseObject'
import type { ProjectServiceAccountCreateResponseRole } from './projectServiceAccountCreateResponseRole'

export interface ProjectServiceAccountCreateResponse {
  object: ProjectServiceAccountCreateResponseObject
  id: string
  name: string
  /** Service accounts can only have one role of type `member` */
  role: ProjectServiceAccountCreateResponseRole
  created_at: number
  api_key: ProjectServiceAccountApiKey
}
