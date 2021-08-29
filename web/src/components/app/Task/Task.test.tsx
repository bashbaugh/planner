import { render } from '@redwoodjs/testing/web'

import Task from './Task'

describe('Task', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Task />)
    }).not.toThrow()
  })
})
