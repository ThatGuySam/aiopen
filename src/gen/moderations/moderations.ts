/* eslint-disable jsdoc/check-alignment */
/* eslint-disable ts/explicit-function-return-type */

import type {
    AxiosRequestConfig,
    AxiosResponse,
} from 'axios'
import type {
    CreateModerationRequest,
    CreateModerationResponse,
} from '.././models'
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import axios from 'axios'

export function getModerations() {
/**
 * @summary Classifies if text and/or image inputs are potentially harmful. Learn
more in the [moderation guide](/docs/guides/moderation).

 */
    const createModeration = <TData = AxiosResponse<CreateModerationResponse>>(
        createModerationRequest: CreateModerationRequest,
        options?: AxiosRequestConfig,
    ): Promise<TData> => {
        return axios.post(
            `http://localhost:3000/v1/moderations`,
            createModerationRequest,
            options,
        )
    }
    return {
        createModeration,
    }
}
export type CreateModerationResult = AxiosResponse<CreateModerationResponse>
