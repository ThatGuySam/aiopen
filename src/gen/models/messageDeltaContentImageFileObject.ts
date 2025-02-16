import type { MessageDeltaContentImageFileObjectImageFile } from './messageDeltaContentImageFileObjectImageFile'
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { MessageDeltaContentImageFileObjectType } from './messageDeltaContentImageFileObjectType'

/**
 * References an image [File](/docs/api-reference/files) in the content of a message.
 */
export interface MessageDeltaContentImageFileObject {
  /** The index of the content part in the message. */
  index: number
  /** Always `image_file`. */
  type: MessageDeltaContentImageFileObjectType
  image_file?: MessageDeltaContentImageFileObjectImageFile
}
