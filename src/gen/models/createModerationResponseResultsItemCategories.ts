/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */

/**
 * A list of the categories, and whether they are flagged or not.
 */
export interface CreateModerationResponseResultsItemCategories {
    /** Content that expresses, incites, or promotes hate based on race, gender, ethnicity, religion, nationality, sexual orientation, disability status, or caste. Hateful content aimed at non-protected groups (e.g., chess players) is harassment. */
    'hate': boolean
    /** Hateful content that also includes violence or serious harm towards the targeted group based on race, gender, ethnicity, religion, nationality, sexual orientation, disability status, or caste. */
    'hate/threatening': boolean
    /** Content that expresses, incites, or promotes harassing language towards any target. */
    'harassment': boolean
    /** Harassment content that also includes violence or serious harm towards any target. */
    'harassment/threatening': boolean
    /**
     * Content that includes instructions or advice that facilitate the planning or execution of wrongdoing, or that gives advice or instruction on how to commit illicit acts. For example, "how to shoplift" would fit this category.
     * @nullable
     */
    'illicit': boolean | null
    /**
     * Content that includes instructions or advice that facilitate the planning or execution of wrongdoing that also includes violence, or that gives advice or instruction on the procurement of any weapon.
     * @nullable
     */
    'illicit/violent': boolean | null
    /** Content that promotes, encourages, or depicts acts of self-harm, such as suicide, cutting, and eating disorders. */
    'self-harm': boolean
    /** Content where the speaker expresses that they are engaging or intend to engage in acts of self-harm, such as suicide, cutting, and eating disorders. */
    'self-harm/intent': boolean
    /** Content that encourages performing acts of self-harm, such as suicide, cutting, and eating disorders, or that gives instructions or advice on how to commit such acts. */
    'self-harm/instructions': boolean
    /** Content meant to arouse sexual excitement, such as the description of sexual activity, or that promotes sexual services (excluding sex education and wellness). */
    'sexual': boolean
    /** Sexual content that includes an individual who is under 18 years old. */
    'sexual/minors': boolean
    /** Content that depicts death, violence, or physical injury. */
    'violence': boolean
    /** Content that depicts death, violence, or physical injury in graphic detail. */
    'violence/graphic': boolean
}
