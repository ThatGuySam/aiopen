/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */

/**
 * A list of the categories along with their scores as predicted by model.
 */
export interface CreateModerationResponseResultsItemCategoryScores {
    /** The score for the category 'hate'. */
    'hate': number
    /** The score for the category 'hate/threatening'. */
    'hate/threatening': number
    /** The score for the category 'harassment'. */
    'harassment': number
    /** The score for the category 'harassment/threatening'. */
    'harassment/threatening': number
    /** The score for the category 'illicit'. */
    'illicit': number
    /** The score for the category 'illicit/violent'. */
    'illicit/violent': number
    /** The score for the category 'self-harm'. */
    'self-harm': number
    /** The score for the category 'self-harm/intent'. */
    'self-harm/intent': number
    /** The score for the category 'self-harm/instructions'. */
    'self-harm/instructions': number
    /** The score for the category 'sexual'. */
    'sexual': number
    /** The score for the category 'sexual/minors'. */
    'sexual/minors': number
    /** The score for the category 'violence'. */
    'violence': number
    /** The score for the category 'violence/graphic'. */
    'violence/graphic': number
}
