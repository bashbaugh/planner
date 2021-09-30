import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TaskCreateArgs>({
  task: {
    one: {
      title: 'String',
      details: 'String',
      date: '2021-08-30T01:37:54Z',
      completed: true,
    },
    two: {
      title: 'String',
      details: 'String',
      date: '2021-08-30T01:37:54Z',
      completed: true,
    },
  },
})

export type StandardScenario = typeof standard
