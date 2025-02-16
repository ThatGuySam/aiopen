/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */

/**
 * For fine-tuning jobs that have `failed`, this will contain more information on the cause of the failure.
 * @nullable
 */
export type FineTuningJobError = {
  /** A machine-readable error code. */
  code: string
  /** A human-readable error message. */
  message: string
  /**
   * The parameter that was invalid, usually `training_file` or `validation_file`. This field will be null if the failure was not parameter-specific.
   * @nullable
   */
  param: string | null
} | null
