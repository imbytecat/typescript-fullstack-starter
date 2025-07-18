import type { Hono, Schema } from 'hono'

export type AppBindings = {}

export type App<S extends Schema = {}> = Hono<AppBindings, S>
