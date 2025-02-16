/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */

export interface TranscriptionSegment {
  /** Unique identifier of the segment. */
  id: number
  /** Seek offset of the segment. */
  seek: number
  /** Start time of the segment in seconds. */
  start: number
  /** End time of the segment in seconds. */
  end: number
  /** Text content of the segment. */
  text: string
  /** Array of token IDs for the text content. */
  tokens: number[]
  /** Temperature parameter used for generating the segment. */
  temperature: number
  /** Average logprob of the segment. If the value is lower than -1, consider the logprobs failed. */
  avg_logprob: number
  /** Compression ratio of the segment. If the value is greater than 2.4, consider the compression failed. */
  compression_ratio: number
  /** Probability of no speech in the segment. If the value is higher than 1.0 and the `avg_logprob` is below -1, consider this segment silent. */
  no_speech_prob: number
}
