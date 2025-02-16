/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { CreateModerationResponseResultsItemCategories } from './createModerationResponseResultsItemCategories'
import type { CreateModerationResponseResultsItemCategoryAppliedInputTypes } from './createModerationResponseResultsItemCategoryAppliedInputTypes'
import type { CreateModerationResponseResultsItemCategoryScores } from './createModerationResponseResultsItemCategoryScores'

export interface CreateModerationResponseResultsItem {
    /** Whether any of the below categories are flagged. */
    flagged: boolean
    /** A list of the categories, and whether they are flagged or not. */
    categories: CreateModerationResponseResultsItemCategories
    /** A list of the categories along with their scores as predicted by model. */
    category_scores: CreateModerationResponseResultsItemCategoryScores
    /** A list of the categories along with the input type(s) that the score applies to. */
    category_applied_input_types: CreateModerationResponseResultsItemCategoryAppliedInputTypes
}
