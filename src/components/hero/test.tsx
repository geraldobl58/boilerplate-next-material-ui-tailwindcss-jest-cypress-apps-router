import { render, screen } from '@testing-library/react'

import { Hero } from '.'

describe('<Hero />', () => {
  it('should render the heading', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', { name: /Using Material UI with NextJS/i })
    ).toBeInTheDocument()
  })
})
