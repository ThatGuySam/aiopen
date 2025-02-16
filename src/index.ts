/**
 * MSW Server Entry Point
 */
import process from 'node:process'
import { handlers } from '@/handlers.js'
import { setupServer } from 'msw/node'

const server = setupServer(...handlers)

// Log intercepted endpoints
server.events.on('request:start', ({ request }) => {
  // eslint-disable-next-line no-console
  console.log(`▸ ${request.method} ${request.url}`)
})

// Start server on default port 3000
server.listen({ onUnhandledRequest: 'bypass' })

// eslint-disable-next-line no-console
console.log(`
🚀 Mock OpenAI API server running
► Base URL: http://localhost:3000/v1
`)

// Keep process alive
setInterval(() => {}, 1000)

// Handle shutdown
process.on('SIGINT', () => {
  server.close()
  process.exit(0)
})
process.on('SIGTERM', () => {
  server.close()
  process.exit(0)
})
