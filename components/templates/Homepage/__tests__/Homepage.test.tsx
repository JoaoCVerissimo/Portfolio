import { render, screen } from '@testing-library/react'
import { Homepage } from '../'

test('renders component successfully', () => {
  render(<Homepage />)
  const element = screen.getByTestId(/test/i)
  expect(element).toBeInTheDocument()
})
