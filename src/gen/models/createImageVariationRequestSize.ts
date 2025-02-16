/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */

/**
 * The size of the generated images. Must be one of `256x256`, `512x512`, or `1024x1024`.
 * @nullable
 */
export type CreateImageVariationRequestSize = typeof CreateImageVariationRequestSize[keyof typeof CreateImageVariationRequestSize] | null

// eslint-disable-next-line ts/no-redeclare
export const CreateImageVariationRequestSize = {
    '256x256': '256x256',
    '512x512': '512x512',
    '1024x1024': '1024x1024',
} as const
