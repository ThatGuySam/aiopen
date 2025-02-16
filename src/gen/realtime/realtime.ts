/* eslint-disable jsdoc/check-alignment */
/* eslint-disable ts/explicit-function-return-type */

import type {
    AxiosRequestConfig,
    AxiosResponse,
} from 'axios'
import type {
    RealtimeSessionCreateRequest,
    RealtimeSessionCreateResponse,
} from '.././models'
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import axios from 'axios'

export function getRealtime() {
/**
 * @summary Create an ephemeral API token for use in client-side applications with the
Realtime API. Can be configured with the same session parameters as the
`session.update` client event.

It responds with a session object, plus a `client_secret` key which contains
a usable ephemeral API token that can be used to authenticate browser clients
for the Realtime API.

 */
    const createRealtimeSession = <TData = AxiosResponse<RealtimeSessionCreateResponse>>(
        realtimeSessionCreateRequest: RealtimeSessionCreateRequest,
        options?: AxiosRequestConfig,
    ): Promise<TData> => {
        return axios.post(
            `http://localhost:3000/v1/realtime/sessions`,
            realtimeSessionCreateRequest,
            options,
        )
    }
    return {
        createRealtimeSession,
    }
}
export type CreateRealtimeSessionResult = AxiosResponse<RealtimeSessionCreateResponse>
