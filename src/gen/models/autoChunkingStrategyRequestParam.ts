/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { AutoChunkingStrategyRequestParamType } from './autoChunkingStrategyRequestParamType'

/**
 * The default strategy. This strategy currently uses a `max_chunk_size_tokens` of `800` and `chunk_overlap_tokens` of `400`.
 */
export interface AutoChunkingStrategyRequestParam {
    /** Always `auto`. */
    type: AutoChunkingStrategyRequestParamType
}
