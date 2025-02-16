import type { ThreadObject } from './threadObject'
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { ThreadStreamEventOneOfEvent } from './threadStreamEventOneOfEvent'

/**
 * Occurs when a new [thread](/docs/api-reference/threads/object) is created.
 */
export interface ThreadStreamEventOneOf {
  /** Whether to enable input audio transcription. */
  enabled?: boolean
  event: ThreadStreamEventOneOfEvent
  data: ThreadObject
}
