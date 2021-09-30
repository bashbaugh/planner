import { tasks } from './tasks'
import type { StandardScenario } from './tasks.scenarios'

describe('tasks', () => {
  scenario('returns all tasks', async (scenario: StandardScenario) => {
    const result = await tasks()

    expect(result.length).toEqual(Object.keys(scenario.task).length)
  })
})
