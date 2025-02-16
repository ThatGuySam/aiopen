/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { ProjectApiKeyOwnerType } from './projectApiKeyOwnerType'
import type { ProjectServiceAccount } from './projectServiceAccount'
import type { ProjectUser } from './projectUser'

export interface ProjectApiKeyOwner {
    /** `user` or `service_account` */
    type?: ProjectApiKeyOwnerType
    user?: ProjectUser
    service_account?: ProjectServiceAccount
}
