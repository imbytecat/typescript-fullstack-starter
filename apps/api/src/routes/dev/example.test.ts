import { describe, expect, it } from 'bun:test'
import { testClient } from 'hono/testing'

import { createTestApp } from '@/lib/create-app'

import { exampleRouter } from './example'

const client = testClient(createTestApp(exampleRouter))

describe('exampleRouter', () => {
  it('should return a 200 status code', async () => {
    const res = await client.example.hello.$get()
    expect(res.status).toBe(200)
  })

  it('should return same name', async () => {
    const res = await client.example.greeting.$post({
      json: {
        name: 'John',
      },
    })
    expect(res.json.name).toBe('John')
  })
})
