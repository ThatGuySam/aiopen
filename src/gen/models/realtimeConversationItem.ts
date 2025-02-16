/* eslint-disable jsdoc/check-alignment */

import type { RealtimeConversationItemContentItem } from './realtimeConversationItemContentItem'
import type { RealtimeConversationItemObject } from './realtimeConversationItemObject'
import type { RealtimeConversationItemRole } from './realtimeConversationItemRole'
import type { RealtimeConversationItemStatus } from './realtimeConversationItemStatus'
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { RealtimeConversationItemType } from './realtimeConversationItemType'

/**
 * The item to add to the conversation.
 */
export interface RealtimeConversationItem {
  /**
 The unique ID of the item, this can be generated by the client to help
manage server-side context, but is not required because the server will
generate one if not provided.
 */
  id?: string
  /**
  The type of the item (`message`, `function_call`, `function_call_output`).
 */
  type?: RealtimeConversationItemType
  /**
  Identifier for the API object being returned - always `realtime.item`.
 */
  object?: RealtimeConversationItemObject
  /**
 The status of the item (`completed`, `incomplete`). These have no effect
on the conversation, but are accepted for consistency with the
`conversation.item.created` event.
 */
  status?: RealtimeConversationItemStatus
  /**
 The role of the message sender (`user`, `assistant`, `system`), only
applicable for `message` items.
 */
  role?: RealtimeConversationItemRole
  /**
 The content of the message, applicable for `message` items.
- Message items of role `system` support only `input_text` content
- Message items of role `user` support `input_text` and `input_audio`
  content
- Message items of role `assistant` support `text` content.
 */
  content?: RealtimeConversationItemContentItem[]
  /**
 The ID of the function call (for `function_call` and
`function_call_output` items). If passed on a `function_call_output`
item, the server will check that a `function_call` item with the same
ID exists in the conversation history.
 */
  call_id?: string
  /**
  The name of the function being called (for `function_call` items).
 */
  name?: string
  /**
  The arguments of the function call (for `function_call` items).
 */
  arguments?: string
  /**
  The output of the function call (for `function_call_output` items).
 */
  output?: string
}
