/* eslint-disable jsdoc/check-alignment */

/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { FileSearchRankingOptionsRanker } from './fileSearchRankingOptionsRanker'

/**
 * The ranking options for the file search. If not specified, the file search tool will use the `auto` ranker and a score_threshold of 0.

See the [file search tool documentation](/docs/assistants/tools/file-search#customizing-file-search-settings) for more information.

 */
export interface FileSearchRankingOptions {
    /** The ranker to use for the file search. If not specified will use the `auto` ranker. */
    ranker?: FileSearchRankingOptionsRanker
    /**
   * The score threshold for the file search. All values must be a floating point number between 0 and 1.
   * @minimum 0
   * @maximum 1
   */
    score_threshold: number
}
