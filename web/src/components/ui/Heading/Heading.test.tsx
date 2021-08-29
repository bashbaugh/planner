import { render } from '@redwoodjs/testing/web'

import Heading from './Heading'

describe('Heading', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Heading />)
    }).not.toThrow()
  })
})
