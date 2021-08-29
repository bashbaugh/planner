import { render } from '@redwoodjs/testing/web'

import PlanPage from './PlanPage'

describe('PlanPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PlanPage />)
    }).not.toThrow()
  })
})
