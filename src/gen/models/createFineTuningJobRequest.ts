/* eslint-disable jsdoc/check-alignment */

import type { CreateFineTuningJobRequestHyperparameters } from './createFineTuningJobRequestHyperparameters'
import type { CreateFineTuningJobRequestIntegrationsItem } from './createFineTuningJobRequestIntegrationsItem'
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { CreateFineTuningJobRequestModel } from './createFineTuningJobRequestModel'
import type { FineTuneMethod } from './fineTuneMethod'

export interface CreateFineTuningJobRequest {
    /**
 The name of the model to fine-tune. You can select one of the
[supported models](/docs/guides/fine-tuning#which-models-can-be-fine-tuned).
 */
    model: CreateFineTuningJobRequestModel
    /**
 The ID of an uploaded file that contains training data.

See [upload file](/docs/api-reference/files/create) for how to upload a file.

Your dataset must be formatted as a JSONL file. Additionally, you must upload your file with the purpose `fine-tune`.

The contents of the file should differ depending on if the model uses the [chat](/docs/api-reference/fine-tuning/chat-input), [completions](/docs/api-reference/fine-tuning/completions-input) format, or if the fine-tuning method uses the [preference](/docs/api-reference/fine-tuning/preference-input) format.

See the [fine-tuning guide](/docs/guides/fine-tuning) for more details.
 */
    training_file: string
    /**
   * The hyperparameters used for the fine-tuning job.
This value is now deprecated in favor of `method`, and should be passed in under the `method` parameter.

   * @deprecated
   */
    hyperparameters?: CreateFineTuningJobRequestHyperparameters
    /**
   * A string of up to 64 characters that will be added to your fine-tuned model name.

For example, a `suffix` of "custom-model-name" would produce a model name like `ft:gpt-4o-mini:openai:custom-model-name:7p4lURel`.

   * @minLength 1
   * @maxLength 64
   * @nullable
   */
    suffix?: string | null
    /**
   * The ID of an uploaded file that contains validation data.

If you provide this file, the data is used to generate validation
metrics periodically during fine-tuning. These metrics can be viewed in
the fine-tuning results file.
The same data should not be present in both train and validation files.

Your dataset must be formatted as a JSONL file. You must upload your file with the purpose `fine-tune`.

See the [fine-tuning guide](/docs/guides/fine-tuning) for more details.

   * @nullable
   */
    validation_file?: string | null
    /**
   * A list of integrations to enable for your fine-tuning job.
   * @nullable
   */
    integrations?: CreateFineTuningJobRequestIntegrationsItem[] | null
    /**
   * The seed controls the reproducibility of the job. Passing in the same seed and job parameters should produce the same results, but may differ in rare cases.
If a seed is not specified, one will be generated for you.

   * @minimum 0
   * @maximum 2147483647
   * @nullable
   */
    seed?: number | null
    method?: FineTuneMethod
}
