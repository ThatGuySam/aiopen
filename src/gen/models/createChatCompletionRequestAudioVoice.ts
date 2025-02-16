/* eslint-disable jsdoc/check-alignment */

/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */

/**
 * The voice the model uses to respond. Supported voices are `ash`, `ballad`, `coral`, `sage`, and `verse` (also supported but not recommended are `alloy`, `echo`, and `shimmer`; these voices are less expressive).

 */
export type CreateChatCompletionRequestAudioVoice = typeof CreateChatCompletionRequestAudioVoice[keyof typeof CreateChatCompletionRequestAudioVoice]

// eslint-disable-next-line ts/no-redeclare
export const CreateChatCompletionRequestAudioVoice = {
  alloy: 'alloy',
  ash: 'ash',
  ballad: 'ballad',
  coral: 'coral',
  echo: 'echo',
  sage: 'sage',
  shimmer: 'shimmer',
  verse: 'verse',
} as const
