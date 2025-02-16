/* eslint-disable ts/explicit-function-return-type */

import type {
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios'
import type {
  CreateEmbeddingRequest,
  CreateEmbeddingResponse,
} from '.././models'
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import axios from 'axios'

export function getEmbeddings() {
/**
 * @summary Creates an embedding vector representing the input text.
 */
  const createEmbedding = <TData = AxiosResponse<CreateEmbeddingResponse>>(
    createEmbeddingRequest: CreateEmbeddingRequest,
    options?: AxiosRequestConfig,
  ): Promise<TData> => {
    return axios.post(
      `http://localhost:3000/v1/embeddings`,
      createEmbeddingRequest,
      options,
    )
  }
  return { createEmbedding }
}
export type CreateEmbeddingResult = AxiosResponse<CreateEmbeddingResponse>
