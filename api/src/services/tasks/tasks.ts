import type { BeforeResolverSpecType } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

export const beforeResolver = (rules: BeforeResolverSpecType) => {
  rules.add(requireAuth)
}

export const tasks = () => {
  return db.task.findMany()
}
