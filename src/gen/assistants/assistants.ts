/* eslint-disable jsdoc/check-alignment */
/* eslint-disable ts/explicit-function-return-type */

import type {
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios'
import type {
  AssistantObject,
  CreateAssistantRequest,
  CreateMessageRequest,
  CreateRunParams,
  CreateRunRequest,
  CreateThreadAndRunRequest,
  CreateThreadRequest,
  DeleteAssistantResponse,
  DeleteMessageResponse,
  DeleteThreadResponse,
  GetRunStepParams,
  ListAssistantsParams,
  ListAssistantsResponse,
  ListMessagesParams,
  ListMessagesResponse,
  ListRunsParams,
  ListRunsResponse,
  ListRunStepsParams,
  ListRunStepsResponse,
  MessageObject,
  ModifyAssistantRequest,
  ModifyMessageRequest,
  ModifyRunRequest,
  ModifyThreadRequest,
  RunObject,
  RunStepObject,
  SubmitToolOutputsRunRequest,
  ThreadObject,
} from '.././models'
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import axios from 'axios'

export function getAssistants() {
/**
 * @summary Returns a list of assistants.
 */
  const listAssistants = <TData = AxiosResponse<ListAssistantsResponse>>(
    params?: ListAssistantsParams,
    options?: AxiosRequestConfig,
  ): Promise<TData> => {
    return axios.get(
      `http://localhost:3000/v1/assistants`,
      {
        ...options,
        params: { ...params, ...options?.params },
      },
    )
  }
  /**
 * @summary Create an assistant with a model and instructions.
 */
  const createAssistant = <TData = AxiosResponse<AssistantObject>>(
    createAssistantRequest: CreateAssistantRequest,
    options?: AxiosRequestConfig,
  ): Promise<TData> => {
    return axios.post(
      `http://localhost:3000/v1/assistants`,
      createAssistantRequest,
      options,
    )
  }
  /**
 * @summary Retrieves an assistant.
 */
  const getAssistant = <TData = AxiosResponse<AssistantObject>>(
    assistantId: string,
    options?: AxiosRequestConfig,
  ): Promise<TData> => {
    return axios.get(
      `http://localhost:3000/v1/assistants/${assistantId}`,
      options,
    )
  }
  /**
 * @summary Modifies an assistant.
 */
  const modifyAssistant = <TData = AxiosResponse<AssistantObject>>(
    assistantId: string,
    modifyAssistantRequest: ModifyAssistantRequest,
    options?: AxiosRequestConfig,
  ): Promise<TData> => {
    return axios.post(
      `http://localhost:3000/v1/assistants/${assistantId}`,
      modifyAssistantRequest,
      options,
    )
  }
  /**
 * @summary Delete an assistant.
 */
  const deleteAssistant = <TData = AxiosResponse<DeleteAssistantResponse>>(
    assistantId: string,
    options?: AxiosRequestConfig,
  ): Promise<TData> => {
    return axios.delete(
      `http://localhost:3000/v1/assistants/${assistantId}`,
      options,
    )
  }
  /**
 * @summary Create a thread.
 */
  const createThread = <TData = AxiosResponse<ThreadObject>>(
    createThreadRequest: CreateThreadRequest,
    options?: AxiosRequestConfig,
  ): Promise<TData> => {
    return axios.post(
      `http://localhost:3000/v1/threads`,
      createThreadRequest,
      options,
    )
  }
  /**
 * @summary Create a thread and run it in one request.
 */
  const createThreadAndRun = <TData = AxiosResponse<RunObject>>(
    createThreadAndRunRequest: CreateThreadAndRunRequest,
    options?: AxiosRequestConfig,
  ): Promise<TData> => {
    return axios.post(
      `http://localhost:3000/v1/threads/runs`,
      createThreadAndRunRequest,
      options,
    )
  }
  /**
 * @summary Retrieves a thread.
 */
  const getThread = <TData = AxiosResponse<ThreadObject>>(
    threadId: string,
    options?: AxiosRequestConfig,
  ): Promise<TData> => {
    return axios.get(
      `http://localhost:3000/v1/threads/${threadId}`,
      options,
    )
  }
  /**
 * @summary Modifies a thread.
 */
  const modifyThread = <TData = AxiosResponse<ThreadObject>>(
    threadId: string,
    modifyThreadRequest: ModifyThreadRequest,
    options?: AxiosRequestConfig,
  ): Promise<TData> => {
    return axios.post(
      `http://localhost:3000/v1/threads/${threadId}`,
      modifyThreadRequest,
      options,
    )
  }
  /**
 * @summary Delete a thread.
 */
  const deleteThread = <TData = AxiosResponse<DeleteThreadResponse>>(
    threadId: string,
    options?: AxiosRequestConfig,
  ): Promise<TData> => {
    return axios.delete(
      `http://localhost:3000/v1/threads/${threadId}`,
      options,
    )
  }
  /**
 * @summary Returns a list of messages for a given thread.
 */
  const listMessages = <TData = AxiosResponse<ListMessagesResponse>>(
    threadId: string,
    params?: ListMessagesParams,
    options?: AxiosRequestConfig,
  ): Promise<TData> => {
    return axios.get(
      `http://localhost:3000/v1/threads/${threadId}/messages`,
      {
        ...options,
        params: { ...params, ...options?.params },
      },
    )
  }
  /**
 * @summary Create a message.
 */
  const createMessage = <TData = AxiosResponse<MessageObject>>(
    threadId: string,
    createMessageRequest: CreateMessageRequest,
    options?: AxiosRequestConfig,
  ): Promise<TData> => {
    return axios.post(
      `http://localhost:3000/v1/threads/${threadId}/messages`,
      createMessageRequest,
      options,
    )
  }
  /**
 * @summary Retrieve a message.
 */
  const getMessage = <TData = AxiosResponse<MessageObject>>(
    threadId: string,
    messageId: string,
    options?: AxiosRequestConfig,
  ): Promise<TData> => {
    return axios.get(
      `http://localhost:3000/v1/threads/${threadId}/messages/${messageId}`,
      options,
    )
  }
  /**
 * @summary Modifies a message.
 */
  const modifyMessage = <TData = AxiosResponse<MessageObject>>(
    threadId: string,
    messageId: string,
    modifyMessageRequest: ModifyMessageRequest,
    options?: AxiosRequestConfig,
  ): Promise<TData> => {
    return axios.post(
      `http://localhost:3000/v1/threads/${threadId}/messages/${messageId}`,
      modifyMessageRequest,
      options,
    )
  }
  /**
 * @summary Deletes a message.
 */
  const deleteMessage = <TData = AxiosResponse<DeleteMessageResponse>>(
    threadId: string,
    messageId: string,
    options?: AxiosRequestConfig,
  ): Promise<TData> => {
    return axios.delete(
      `http://localhost:3000/v1/threads/${threadId}/messages/${messageId}`,
      options,
    )
  }
  /**
 * @summary Returns a list of runs belonging to a thread.
 */
  const listRuns = <TData = AxiosResponse<ListRunsResponse>>(
    threadId: string,
    params?: ListRunsParams,
    options?: AxiosRequestConfig,
  ): Promise<TData> => {
    return axios.get(
      `http://localhost:3000/v1/threads/${threadId}/runs`,
      {
        ...options,
        params: { ...params, ...options?.params },
      },
    )
  }
  /**
 * @summary Create a run.
 */
  const createRun = <TData = AxiosResponse<RunObject>>(
    threadId: string,
    createRunRequest: CreateRunRequest,
    params?: CreateRunParams,
    options?: AxiosRequestConfig,
  ): Promise<TData> => {
    return axios.post(
      `http://localhost:3000/v1/threads/${threadId}/runs`,
      createRunRequest,
      {
        ...options,
        params: { ...params, ...options?.params },
      },
    )
  }
  /**
 * @summary Retrieves a run.
 */
  const getRun = <TData = AxiosResponse<RunObject>>(
    threadId: string,
    runId: string,
    options?: AxiosRequestConfig,
  ): Promise<TData> => {
    return axios.get(
      `http://localhost:3000/v1/threads/${threadId}/runs/${runId}`,
      options,
    )
  }
  /**
 * @summary Modifies a run.
 */
  const modifyRun = <TData = AxiosResponse<RunObject>>(
    threadId: string,
    runId: string,
    modifyRunRequest: ModifyRunRequest,
    options?: AxiosRequestConfig,
  ): Promise<TData> => {
    return axios.post(
      `http://localhost:3000/v1/threads/${threadId}/runs/${runId}`,
      modifyRunRequest,
      options,
    )
  }
  /**
 * @summary Cancels a run that is `in_progress`.
 */
  const cancelRun = <TData = AxiosResponse<RunObject>>(
    threadId: string,
    runId: string,
    options?: AxiosRequestConfig,
  ): Promise<TData> => {
    return axios.post(
      `http://localhost:3000/v1/threads/${threadId}/runs/${runId}/cancel`,
      undefined,
      options,
    )
  }
  /**
 * @summary Returns a list of run steps belonging to a run.
 */
  const listRunSteps = <TData = AxiosResponse<ListRunStepsResponse>>(
    threadId: string,
    runId: string,
    params?: ListRunStepsParams,
    options?: AxiosRequestConfig,
  ): Promise<TData> => {
    return axios.get(
      `http://localhost:3000/v1/threads/${threadId}/runs/${runId}/steps`,
      {
        ...options,
        params: { ...params, ...options?.params },
      },
    )
  }
  /**
 * @summary Retrieves a run step.
 */
  const getRunStep = <TData = AxiosResponse<RunStepObject>>(
    threadId: string,
    runId: string,
    stepId: string,
    params?: GetRunStepParams,
    options?: AxiosRequestConfig,
  ): Promise<TData> => {
    return axios.get(
      `http://localhost:3000/v1/threads/${threadId}/runs/${runId}/steps/${stepId}`,
      {
        ...options,
        params: { ...params, ...options?.params },
      },
    )
  }
  /**
 * @summary When a run has the `status: "requires_action"` and `required_action.type` is `submit_tool_outputs`, this endpoint can be used to submit the outputs from the tool calls once they're all completed. All outputs must be submitted in a single request.

 */
  const submitToolOuputsToRun = <TData = AxiosResponse<RunObject>>(
    threadId: string,
    runId: string,
    submitToolOutputsRunRequest: SubmitToolOutputsRunRequest,
    options?: AxiosRequestConfig,
  ): Promise<TData> => {
    return axios.post(
      `http://localhost:3000/v1/threads/${threadId}/runs/${runId}/submit_tool_outputs`,
      submitToolOutputsRunRequest,
      options,
    )
  }
  return { listAssistants, createAssistant, getAssistant, modifyAssistant, deleteAssistant, createThread, createThreadAndRun, getThread, modifyThread, deleteThread, listMessages, createMessage, getMessage, modifyMessage, deleteMessage, listRuns, createRun, getRun, modifyRun, cancelRun, listRunSteps, getRunStep, submitToolOuputsToRun }
}
export type ListAssistantsResult = AxiosResponse<ListAssistantsResponse>
export type CreateAssistantResult = AxiosResponse<AssistantObject>
export type GetAssistantResult = AxiosResponse<AssistantObject>
export type ModifyAssistantResult = AxiosResponse<AssistantObject>
export type DeleteAssistantResult = AxiosResponse<DeleteAssistantResponse>
export type CreateThreadResult = AxiosResponse<ThreadObject>
export type CreateThreadAndRunResult = AxiosResponse<RunObject>
export type GetThreadResult = AxiosResponse<ThreadObject>
export type ModifyThreadResult = AxiosResponse<ThreadObject>
export type DeleteThreadResult = AxiosResponse<DeleteThreadResponse>
export type ListMessagesResult = AxiosResponse<ListMessagesResponse>
export type CreateMessageResult = AxiosResponse<MessageObject>
export type GetMessageResult = AxiosResponse<MessageObject>
export type ModifyMessageResult = AxiosResponse<MessageObject>
export type DeleteMessageResult = AxiosResponse<DeleteMessageResponse>
export type ListRunsResult = AxiosResponse<ListRunsResponse>
export type CreateRunResult = AxiosResponse<RunObject>
export type GetRunResult = AxiosResponse<RunObject>
export type ModifyRunResult = AxiosResponse<RunObject>
export type CancelRunResult = AxiosResponse<RunObject>
export type ListRunStepsResult = AxiosResponse<ListRunStepsResponse>
export type GetRunStepResult = AxiosResponse<RunStepObject>
export type SubmitToolOuputsToRunResult = AxiosResponse<RunObject>
