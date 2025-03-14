/* eslint-disable jsdoc/check-alignment */

import type { FineTuneDPOMethodHyperparametersBatchSize } from './fineTuneDPOMethodHyperparametersBatchSize'
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import type { FineTuneDPOMethodHyperparametersBeta } from './fineTuneDPOMethodHyperparametersBeta'
import type { FineTuneDPOMethodHyperparametersLearningRateMultiplier } from './fineTuneDPOMethodHyperparametersLearningRateMultiplier'
import type { FineTuneDPOMethodHyperparametersNEpochs } from './fineTuneDPOMethodHyperparametersNEpochs'

/**
 * The hyperparameters used for the fine-tuning job.
 */
export interface FineTuneDPOMethodHyperparameters {
    /**
  The beta value for the DPO method. A higher beta value will increase the weight of the penalty between the policy and reference model.
 */
    beta?: FineTuneDPOMethodHyperparametersBeta
    /**
  Number of examples in each batch. A larger batch size means that model parameters are updated less frequently, but with lower variance.
 */
    batch_size?: FineTuneDPOMethodHyperparametersBatchSize
    /**
  Scaling factor for the learning rate. A smaller learning rate may be useful to avoid overfitting.
 */
    learning_rate_multiplier?: FineTuneDPOMethodHyperparametersLearningRateMultiplier
    /**
  The number of epochs to train the model for. An epoch refers to one full cycle through the training dataset.
 */
    n_epochs?: FineTuneDPOMethodHyperparametersNEpochs
}
