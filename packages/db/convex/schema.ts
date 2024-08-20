import { defineSchema, defineTable } from 'convex/server'
import { authTables } from '@convex-dev/auth/server'
import { v } from 'convex/values'

export default defineSchema({
  ...authTables,
  messages: defineTable({
    userId: v.id('users'),
    body: v.string(),
  }),
  products: defineTable({
    title: v.string(),
    price: v.float64(),
  }),
})
