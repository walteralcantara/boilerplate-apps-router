import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    // renders component
    const { container } = render(<Main />)

    // search for element and check if it exists
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    // matches snapshot
    expect(container.firstChild).toMatchSnapshot()
  })
})
