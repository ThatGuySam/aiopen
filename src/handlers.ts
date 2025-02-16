import type { RequestHandler } from 'msw'
import { getDefaultMock as defaultHandlers } from '@/gen/default/default.msw.js'
import { getModelsMock as modelsHandlers } from '@/gen/models/models.msw.js'

export const handlers: RequestHandler[] = [
  ...defaultHandlers(),
  ...modelsHandlers(),
]
