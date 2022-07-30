import { render, screen } from '@testing-library/react'
import { SmallButton } from '../'

test('renders component successfully', () => {
  render(<SmallButton />)
  const element = screen.getByTestId(/test/i)
  expect(element).toBeInTheDocument()
})
