import type { ChatCompletionFunctions } from './chatCompletionFunctions'
import type { ChatCompletionTool } from './chatCompletionTool'
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { FineTuneChatRequestInputMessagesItem } from './fineTuneChatRequestInputMessagesItem'
import type { ParallelToolCalls } from './parallelToolCalls'

/**
 * The per-line training example of a fine-tuning input file for chat models using the supervised method.
 */
export interface FineTuneChatRequestInput {
  /** @minItems 1 */
  messages?: FineTuneChatRequestInputMessagesItem[]
  /** A list of tools the model may generate JSON inputs for. */
  tools?: ChatCompletionTool[]
  parallel_tool_calls?: ParallelToolCalls
  /**
   * A list of functions the model may generate JSON inputs for.
   * @deprecated
   * @minItems 1
   * @maxItems 128
   */
  functions?: ChatCompletionFunctions[]
}
