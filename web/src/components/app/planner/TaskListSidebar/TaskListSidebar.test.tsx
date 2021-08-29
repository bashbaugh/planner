import { render } from '@redwoodjs/testing/web'

import TaskListSidebar from './TaskListSidebar'

describe('TaskListSidebar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TaskListSidebar />)
    }).not.toThrow()
  })
})
