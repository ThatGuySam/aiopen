/* eslint-disable ts/explicit-function-return-type */

import type {
    CreateTranscription200,
    CreateTranscriptionResponseJson,
    CreateTranscriptionResponseVerboseJson,
    CreateTranslation200,
    CreateTranslationResponseJson,
    CreateTranslationResponseVerboseJson,
} from '.././models'
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 * OpenAPI spec version: 2.3.0
 */
import {
    faker,
} from '@faker-js/faker'
import {
    delay,
    http,
    HttpResponse,
} from 'msw'

export const getCreateSpeechResponseMock = (): Blob => (new Blob(faker.helpers.arrayElements(faker.word.words(10).split(' '))))

export function getCreateTranscriptionResponseCreateTranscriptionResponseJsonMock(overrideResponse: Partial<CreateTranscriptionResponseJson> = {}): CreateTranscriptionResponseJson {
    return {
        ...{
            text: faker.string.alpha(20),
        },
        ...overrideResponse,
    }
}

export function getCreateTranscriptionResponseCreateTranscriptionResponseVerboseJsonMock(overrideResponse: Partial<CreateTranscriptionResponseVerboseJson> = {}): CreateTranscriptionResponseVerboseJson {
    return {
        ...{
            language: faker.string.alpha(20),
            duration: faker.number.int({
                min: undefined,
                max: undefined,
            }),
            text: faker.string.alpha(20),
            words: faker.helpers.arrayElement([
                Array.from({
                    length: faker.number.int({
                        min: 1,
                        max: 10,
                    }),
                }, (_, i) => i + 1).map(() => ({
                    word: faker.string.alpha(20),
                    start: faker.number.float(),
                    end: faker.number.float(),
                })),
                undefined,
            ]),
            segments: faker.helpers.arrayElement([
                Array.from({
                    length: faker.number.int({
                        min: 1,
                        max: 10,
                    }),
                }, (_, i) => i + 1).map(() => ({
                    id: faker.number.int({
                        min: undefined,
                        max: undefined,
                    }),
                    seek: faker.number.int({
                        min: undefined,
                        max: undefined,
                    }),
                    start: faker.number.float(),
                    end: faker.number.float(),
                    text: faker.string.alpha(20),
                    tokens: Array.from({
                        length: faker.number.int({
                            min: 1,
                            max: 10,
                        }),
                    }, (_, i) => i + 1).map(() => (faker.number.int({
                        min: undefined,
                        max: undefined,
                    }))),
                    temperature: faker.number.float(),
                    avg_logprob: faker.number.float(),
                    compression_ratio: faker.number.float(),
                    no_speech_prob: faker.number.float(),
                })),
                undefined,
            ]),
        },
        ...overrideResponse,
    }
}

export function getCreateTranscriptionResponseMock(): CreateTranscription200 {
    return faker.helpers.arrayElement([
        {
            ...getCreateTranscriptionResponseCreateTranscriptionResponseJsonMock(),
        },
        {
            ...getCreateTranscriptionResponseCreateTranscriptionResponseVerboseJsonMock(),
        },
    ])
}

export function getCreateTranslationResponseCreateTranslationResponseJsonMock(overrideResponse: Partial<CreateTranslationResponseJson> = {}): CreateTranslationResponseJson {
    return {
        ...{
            text: faker.string.alpha(20),
        },
        ...overrideResponse,
    }
}

export function getCreateTranslationResponseCreateTranslationResponseVerboseJsonMock(overrideResponse: Partial<CreateTranslationResponseVerboseJson> = {}): CreateTranslationResponseVerboseJson {
    return {
        ...{
            language: faker.string.alpha(20),
            duration: faker.number.int({
                min: undefined,
                max: undefined,
            }),
            text: faker.string.alpha(20),
            segments: faker.helpers.arrayElement([
                Array.from({
                    length: faker.number.int({
                        min: 1,
                        max: 10,
                    }),
                }, (_, i) => i + 1).map(() => ({
                    id: faker.number.int({
                        min: undefined,
                        max: undefined,
                    }),
                    seek: faker.number.int({
                        min: undefined,
                        max: undefined,
                    }),
                    start: faker.number.float(),
                    end: faker.number.float(),
                    text: faker.string.alpha(20),
                    tokens: Array.from({
                        length: faker.number.int({
                            min: 1,
                            max: 10,
                        }),
                    }, (_, i) => i + 1).map(() => (faker.number.int({
                        min: undefined,
                        max: undefined,
                    }))),
                    temperature: faker.number.float(),
                    avg_logprob: faker.number.float(),
                    compression_ratio: faker.number.float(),
                    no_speech_prob: faker.number.float(),
                })),
                undefined,
            ]),
        },
        ...overrideResponse,
    }
}

export function getCreateTranslationResponseMock(): CreateTranslation200 {
    return faker.helpers.arrayElement([
        {
            ...getCreateTranslationResponseCreateTranslationResponseJsonMock(),
        },
        {
            ...getCreateTranslationResponseCreateTranslationResponseVerboseJsonMock(),
        },
    ])
}

export function getCreateSpeechMockHandler(overrideResponse?: Blob | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<Blob> | Blob)) {
    return http.post('*/audio/speech', async (info) => {
        await delay(1000)

        return new HttpResponse(JSON.stringify(overrideResponse !== undefined
            ? (typeof overrideResponse === 'function' ? await overrideResponse(info) : overrideResponse)
            : getCreateSpeechResponseMock()), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        })
    })
}

export function getCreateTranscriptionMockHandler(overrideResponse?: CreateTranscription200 | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<CreateTranscription200> | CreateTranscription200)) {
    return http.post('*/audio/transcriptions', async (info) => {
        await delay(1000)

        return new HttpResponse(JSON.stringify(overrideResponse !== undefined
            ? (typeof overrideResponse === 'function' ? await overrideResponse(info) : overrideResponse)
            : getCreateTranscriptionResponseMock()), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        })
    })
}

export function getCreateTranslationMockHandler(overrideResponse?: CreateTranslation200 | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<CreateTranslation200> | CreateTranslation200)) {
    return http.post('*/audio/translations', async (info) => {
        await delay(1000)

        return new HttpResponse(JSON.stringify(overrideResponse !== undefined
            ? (typeof overrideResponse === 'function' ? await overrideResponse(info) : overrideResponse)
            : getCreateTranslationResponseMock()), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        })
    })
}
export function getAudioMock() {
    return [
        getCreateSpeechMockHandler(),
        getCreateTranscriptionMockHandler(),
        getCreateTranslationMockHandler(),
    ]
}
