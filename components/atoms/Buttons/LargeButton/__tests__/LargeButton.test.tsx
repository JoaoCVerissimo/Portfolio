import { render, screen } from '@testing-library/react'
import { LargeButton } from '../'

test('renders component successfully', () => {
  render(<LargeButton />)
  const element = screen.getByTestId(/test/i)
  expect(element).toBeInTheDocument()
})
