import type { MessageObjectAttachmentsItem } from './messageObjectAttachmentsItem'
import type { MessageObjectContentItem } from './messageObjectContentItem'
import type { MessageObjectIncompleteDetails } from './messageObjectIncompleteDetails'
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { MessageObjectObject } from './messageObjectObject'
import type { MessageObjectRole } from './messageObjectRole'
import type { MessageObjectStatus } from './messageObjectStatus'
import type { Metadata } from './metadata'

/**
 * Represents a message within a [thread](/docs/api-reference/threads).
 */
export interface MessageObject {
  /** The identifier, which can be referenced in API endpoints. */
  id: string
  /** The object type, which is always `thread.message`. */
  object: MessageObjectObject
  /** The Unix timestamp (in seconds) for when the message was created. */
  created_at: number
  /** The [thread](/docs/api-reference/threads) ID that this message belongs to. */
  thread_id: string
  /** The status of the message, which can be either `in_progress`, `incomplete`, or `completed`. */
  status: MessageObjectStatus
  /**
   * On an incomplete message, details about why the message is incomplete.
   * @nullable
   */
  incomplete_details: MessageObjectIncompleteDetails
  /**
   * The Unix timestamp (in seconds) for when the message was completed.
   * @nullable
   */
  completed_at: number | null
  /**
   * The Unix timestamp (in seconds) for when the message was marked as incomplete.
   * @nullable
   */
  incomplete_at: number | null
  /** The entity that produced the message. One of `user` or `assistant`. */
  role: MessageObjectRole
  /** The content of the message in array of text and/or images. */
  content: MessageObjectContentItem[]
  /**
   * If applicable, the ID of the [assistant](/docs/api-reference/assistants) that authored this message.
   * @nullable
   */
  assistant_id: string | null
  /**
   * The ID of the [run](/docs/api-reference/runs) associated with the creation of this message. Value is `null` when messages are created manually using the create message or create thread endpoints.
   * @nullable
   */
  run_id: string | null
  /**
   * A list of files attached to the message, and the tools they were added to.
   * @nullable
   */
  attachments: MessageObjectAttachmentsItem[] | null
  metadata: Metadata
}
