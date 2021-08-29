import { render } from '@redwoodjs/testing/web'

import AppNavBar from './AppNavBar'

describe('AppNavBar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AppNavBar />)
    }).not.toThrow()
  })
})
