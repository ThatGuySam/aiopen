/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { MessageContentImageFileObjectImageFileDetail } from './messageContentImageFileObjectImageFileDetail'

export interface MessageContentImageFileObjectImageFile {
    /** The [File](/docs/api-reference/files) ID of the image in the message content. Set `purpose="vision"` when uploading the File if you need to later display the file content. */
    file_id: string
    /** Specifies the detail level of the image if specified by the user. `low` uses fewer tokens, you can opt in to high resolution using `high`. */
    detail?: MessageContentImageFileObjectImageFileDetail
}
