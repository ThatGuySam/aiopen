/* eslint-disable ts/explicit-function-return-type */

import type {
    AxiosRequestConfig,
    AxiosResponse,
} from 'axios'
import type {
    Batch,
    CreateBatchBody,
    ListBatchesParams,
    ListBatchesResponse,
} from '.././models'
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import axios from 'axios'

export function getBatch() {
/**
 * @summary Creates and executes a batch from an uploaded file of requests
 */
    const createBatch = <TData = AxiosResponse<Batch>>(
        createBatchBody: CreateBatchBody,
        options?: AxiosRequestConfig,
    ): Promise<TData> => {
        return axios.post(
            `http://localhost:3000/v1/batches`,
            createBatchBody,
            options,
        )
    }
    /**
     * @summary List your organization's batches.
     */
    const listBatches = <TData = AxiosResponse<ListBatchesResponse>>(
        params?: ListBatchesParams,
        options?: AxiosRequestConfig,
    ): Promise<TData> => {
        return axios.get(
            `http://localhost:3000/v1/batches`,
            {
                ...options,
                params: {
                    ...params,
                    ...options?.params,
                },
            },
        )
    }
    /**
     * @summary Retrieves a batch.
     */
    const retrieveBatch = <TData = AxiosResponse<Batch>>(
        batchId: string,
        options?: AxiosRequestConfig,
    ): Promise<TData> => {
        return axios.get(
            `http://localhost:3000/v1/batches/${batchId}`,
            options,
        )
    }
    /**
     * @summary Cancels an in-progress batch. The batch will be in status `cancelling` for up to 10 minutes, before changing to `cancelled`, where it will have partial results (if any) available in the output file.
     */
    const cancelBatch = <TData = AxiosResponse<Batch>>(
        batchId: string,
        options?: AxiosRequestConfig,
    ): Promise<TData> => {
        return axios.post(
            `http://localhost:3000/v1/batches/${batchId}/cancel`,
            undefined,
            options,
        )
    }
    return {
        createBatch,
        listBatches,
        retrieveBatch,
        cancelBatch,
    }
}
export type CreateBatchResult = AxiosResponse<Batch>
export type ListBatchesResult = AxiosResponse<ListBatchesResponse>
export type RetrieveBatchResult = AxiosResponse<Batch>
export type CancelBatchResult = AxiosResponse<Batch>
