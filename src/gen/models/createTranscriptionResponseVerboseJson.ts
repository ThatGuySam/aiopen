import type { TranscriptionSegment } from './transcriptionSegment'
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { TranscriptionWord } from './transcriptionWord'

/**
 * Represents a verbose json transcription response returned by model, based on the provided input.
 */
export interface CreateTranscriptionResponseVerboseJson {
  /** The language of the input audio. */
  language: string
  /** The duration of the input audio. */
  duration: number
  /** The transcribed text. */
  text: string
  /** Extracted words and their corresponding timestamps. */
  words?: TranscriptionWord[]
  /** Segments of the transcribed text and their corresponding details. */
  segments?: TranscriptionSegment[]
}
