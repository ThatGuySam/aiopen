/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */

/**
 * Anchor timestamp after which the expiration policy applies. Supported anchors: `last_active_at`.
 */
export type VectorStoreExpirationAfterAnchor = typeof VectorStoreExpirationAfterAnchor[keyof typeof VectorStoreExpirationAfterAnchor]

// eslint-disable-next-line ts/no-redeclare
export const VectorStoreExpirationAfterAnchor = {
    last_active_at: 'last_active_at',
} as const
