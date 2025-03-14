/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { ProjectObject } from './projectObject'
import type { ProjectStatus } from './projectStatus'

/**
 * Represents an individual project.
 */
export interface Project {
    /** The identifier, which can be referenced in API endpoints */
    id: string
    /** The object type, which is always `organization.project` */
    object: ProjectObject
    /** The name of the project. This appears in reporting. */
    name: string
    /** The Unix timestamp (in seconds) of when the project was created. */
    created_at: number
    /**
     * The Unix timestamp (in seconds) of when the project was archived or `null`.
     * @nullable
     */
    archived_at?: number | null
    /** `active` or `archived` */
    status: ProjectStatus
}
