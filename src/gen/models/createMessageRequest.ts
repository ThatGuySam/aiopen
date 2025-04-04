/* eslint-disable jsdoc/check-alignment */

import type { CreateMessageRequestAttachmentsItem } from './createMessageRequestAttachmentsItem'
import type { CreateMessageRequestContent } from './createMessageRequestContent'
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { CreateMessageRequestRole } from './createMessageRequestRole'
import type { Metadata } from './metadata'

export interface CreateMessageRequest {
    /**
 The role of the entity that is creating the message. Allowed values include:
- `user`: Indicates the message is sent by an actual user and should be used in most cases to represent user-generated messages.
- `assistant`: Indicates the message is generated by the assistant. Use this value to insert messages from the assistant into the conversation.
 */
    role: CreateMessageRequestRole
    content: CreateMessageRequestContent
    /**
   * A list of files attached to the message, and the tools they should be added to.
   * @nullable
   */
    attachments?: CreateMessageRequestAttachmentsItem[] | null
    metadata?: Metadata
}
