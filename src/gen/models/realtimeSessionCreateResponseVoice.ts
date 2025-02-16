/* eslint-disable jsdoc/check-alignment */

/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */

/**
 * The voice the model uses to respond. Voice cannot be changed during the
session once the model has responded with audio at least once. Current
voice options are `alloy`, `ash`, `ballad`, `coral`, `echo` `sage`,
`shimmer` and `verse`.

 */
export type RealtimeSessionCreateResponseVoice = typeof RealtimeSessionCreateResponseVoice[keyof typeof RealtimeSessionCreateResponseVoice]

// eslint-disable-next-line ts/no-redeclare
export const RealtimeSessionCreateResponseVoice = {
    alloy: 'alloy',
    ash: 'ash',
    ballad: 'ballad',
    coral: 'coral',
    echo: 'echo',
    sage: 'sage',
    shimmer: 'shimmer',
    verse: 'verse',
} as const
