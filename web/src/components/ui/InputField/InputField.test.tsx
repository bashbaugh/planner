import { render } from '@redwoodjs/testing/web'

import InputField from './InputField'

describe('Input', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InputField />)
    }).not.toThrow()
  })
})
