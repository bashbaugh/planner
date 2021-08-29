import { render } from '@redwoodjs/testing/web'

import TodayPage from './TodayPage'

describe('TodayPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TodayPage />)
    }).not.toThrow()
  })
})
