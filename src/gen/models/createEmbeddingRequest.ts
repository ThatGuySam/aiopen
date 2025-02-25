/* eslint-disable jsdoc/check-alignment */

import type { CreateEmbeddingRequestEncodingFormat } from './createEmbeddingRequestEncodingFormat'
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { CreateEmbeddingRequestInput } from './createEmbeddingRequestInput'
import type { CreateEmbeddingRequestModel } from './createEmbeddingRequestModel'

export interface CreateEmbeddingRequest {
    /**
  Input text to embed, encoded as a string or array of tokens. To embed multiple inputs in a single request, pass an array of strings or array of token arrays. The input must not exceed the max input tokens for the model (8192 tokens for `text-embedding-ada-002`), cannot be an empty string, and any array must be 2048 dimensions or less. [Example Python code](https://cookbook.openai.com/examples/how_to_count_tokens_with_tiktoken) for counting tokens. Some models may also impose a limit on total number of tokens summed across inputs.
 */
    input: CreateEmbeddingRequestInput
    /**
  ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models) for descriptions of them.
 */
    model: CreateEmbeddingRequestModel
    /** The format to return the embeddings in. Can be either `float` or [`base64`](https://pypi.org/project/pybase64/). */
    encoding_format?: CreateEmbeddingRequestEncodingFormat
    /**
   * The number of dimensions the resulting output embeddings should have. Only supported in `text-embedding-3` and later models.

   * @minimum 1
   */
    dimensions?: number
    /**
  A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices#end-user-ids).
 */
    user?: string
}
