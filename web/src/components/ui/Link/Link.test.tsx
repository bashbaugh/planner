import { render } from '@redwoodjs/testing/web'

import Link from './Link'

describe('Link', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Link />)
    }).not.toThrow()
  })
})
