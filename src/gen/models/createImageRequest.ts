/* eslint-disable jsdoc/check-alignment */

/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { CreateImageRequestModel } from './createImageRequestModel'
import type { CreateImageRequestQuality } from './createImageRequestQuality'
import type { CreateImageRequestResponseFormat } from './createImageRequestResponseFormat'
import type { CreateImageRequestSize } from './createImageRequestSize'
import type { CreateImageRequestStyle } from './createImageRequestStyle'

export interface CreateImageRequest {
  /** A text description of the desired image(s). The maximum length is 1000 characters for `dall-e-2` and 4000 characters for `dall-e-3`. */
  prompt: string
  /**
   * The model to use for image generation.
   * @nullable
   */
  model?: CreateImageRequestModel
  /**
   * The number of images to generate. Must be between 1 and 10. For `dall-e-3`, only `n=1` is supported.
   * @minimum 1
   * @maximum 10
   * @nullable
   */
  n?: number | null
  /** The quality of the image that will be generated. `hd` creates images with finer details and greater consistency across the image. This param is only supported for `dall-e-3`. */
  quality?: CreateImageRequestQuality
  /**
   * The format in which the generated images are returned. Must be one of `url` or `b64_json`. URLs are only valid for 60 minutes after the image has been generated.
   * @nullable
   */
  response_format?: CreateImageRequestResponseFormat
  /**
   * The size of the generated images. Must be one of `256x256`, `512x512`, or `1024x1024` for `dall-e-2`. Must be one of `1024x1024`, `1792x1024`, or `1024x1792` for `dall-e-3` models.
   * @nullable
   */
  size?: CreateImageRequestSize
  /**
   * The style of the generated images. Must be one of `vivid` or `natural`. Vivid causes the model to lean towards generating hyper-real and dramatic images. Natural causes the model to produce more natural, less hyper-real looking images. This param is only supported for `dall-e-3`.
   * @nullable
   */
  style?: CreateImageRequestStyle
  /**
  A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices#end-user-ids).
 */
  user?: string
}
