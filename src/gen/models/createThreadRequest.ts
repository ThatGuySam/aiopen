/* eslint-disable jsdoc/check-alignment */

/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { CreateMessageRequest } from './createMessageRequest'
import type { CreateThreadRequestToolResources } from './createThreadRequestToolResources'
import type { Metadata } from './metadata'

/**
 * Options to create a new thread. If no thread is provided when running a
request, an empty thread will be created.

 */
export interface CreateThreadRequest {
  /** A list of [messages](/docs/api-reference/messages) to start the thread with. */
  messages?: CreateMessageRequest[]
  /**
   * A set of resources that are made available to the assistant's tools in this thread. The resources are specific to the type of tool. For example, the `code_interpreter` tool requires a list of file IDs, while the `file_search` tool requires a list of vector store IDs.

   * @nullable
   */
  tool_resources?: CreateThreadRequestToolResources
  metadata?: Metadata
}
