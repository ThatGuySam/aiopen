import type { MessageContentTextAnnotationsFileCitationObjectFileCitation } from './messageContentTextAnnotationsFileCitationObjectFileCitation'
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { MessageContentTextAnnotationsFileCitationObjectType } from './messageContentTextAnnotationsFileCitationObjectType'

/**
 * A citation within the message that points to a specific quote from a specific File associated with the assistant or the message. Generated when the assistant uses the "file_search" tool to search files.
 */
export interface MessageContentTextAnnotationsFileCitationObject {
    /** Always `file_citation`. */
    type: MessageContentTextAnnotationsFileCitationObjectType
    /** The text in the message content that needs to be replaced. */
    text: string
    file_citation: MessageContentTextAnnotationsFileCitationObjectFileCitation
    /** @minimum 0 */
    start_index: number
    /** @minimum 0 */
    end_index: number
}
