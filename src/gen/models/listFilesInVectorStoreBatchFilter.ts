/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */

export type ListFilesInVectorStoreBatchFilter = typeof ListFilesInVectorStoreBatchFilter[keyof typeof ListFilesInVectorStoreBatchFilter]

// eslint-disable-next-line ts/no-redeclare
export const ListFilesInVectorStoreBatchFilter = {
  in_progress: 'in_progress',
  completed: 'completed',
  failed: 'failed',
  cancelled: 'cancelled',
} as const
