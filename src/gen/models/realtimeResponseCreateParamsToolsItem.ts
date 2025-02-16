/* eslint-disable jsdoc/check-alignment */

import type { RealtimeResponseCreateParamsToolsItemParameters } from './realtimeResponseCreateParamsToolsItemParameters'
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { RealtimeResponseCreateParamsToolsItemType } from './realtimeResponseCreateParamsToolsItemType'

export interface RealtimeResponseCreateParamsToolsItem {
    /** The type of the tool, i.e. `function`. */
    type?: RealtimeResponseCreateParamsToolsItemType
    /** The name of the function. */
    name?: string
    /**
 The description of the function, including guidance on when and how
to call it, and guidance about what to tell the user when calling
(if anything).
 */
    description?: string
    /** Parameters of the function in JSON Schema. */
    parameters?: RealtimeResponseCreateParamsToolsItemParameters
}
