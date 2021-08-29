import { render } from '@redwoodjs/testing/web'

import Input from './Input'

describe('Input', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Input />)
    }).not.toThrow()
  })
})
