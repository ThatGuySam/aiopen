/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */

/**
 * The format in which the generated images are returned. Must be one of `url` or `b64_json`. URLs are only valid for 60 minutes after the image has been generated.
 * @nullable
 */
export type CreateImageVariationRequestResponseFormat = typeof CreateImageVariationRequestResponseFormat[keyof typeof CreateImageVariationRequestResponseFormat] | null

// eslint-disable-next-line ts/no-redeclare
export const CreateImageVariationRequestResponseFormat = {
    url: 'url',
    b64_json: 'b64_json',
} as const
