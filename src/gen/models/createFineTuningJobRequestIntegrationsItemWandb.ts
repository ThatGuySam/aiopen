/* eslint-disable jsdoc/check-alignment */

/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */

/**
 * The settings for your integration with Weights and Biases. This payload specifies the project that
metrics will be sent to. Optionally, you can set an explicit display name for your run, add tags
to your run, and set a default entity (team, username, etc) to be associated with your run.

 */
export interface CreateFineTuningJobRequestIntegrationsItemWandb {
    /**
  The name of the project that the new run will be created under.
 */
    project: string
    /**
   * A display name to set for the run. If not set, we will use the Job ID as the name.

   * @nullable
   */
    name?: string | null
    /**
   * The entity to use for the run. This allows you to set the team or username of the WandB user that you would
like associated with the run. If not set, the default entity for the registered WandB API key is used.

   * @nullable
   */
    entity?: string | null
    /**
 A list of tags to be attached to the newly created run. These tags are passed through directly to WandB. Some
default tags are generated by OpenAI: "openai/finetune", "openai/{base-model}", "openai/{ftjob-abcdef}".
 */
    tags?: string[]
}
