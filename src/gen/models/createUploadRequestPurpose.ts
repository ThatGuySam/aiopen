/* eslint-disable jsdoc/check-alignment */

/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */

/**
 * The intended purpose of the uploaded file.

See the [documentation on File purposes](/docs/api-reference/files/create#files-create-purpose).

 */
export type CreateUploadRequestPurpose = typeof CreateUploadRequestPurpose[keyof typeof CreateUploadRequestPurpose]

// eslint-disable-next-line ts/no-redeclare
export const CreateUploadRequestPurpose = {
    'assistants': 'assistants',
    'batch': 'batch',
    'fine-tune': 'fine-tune',
    'vision': 'vision',
} as const
