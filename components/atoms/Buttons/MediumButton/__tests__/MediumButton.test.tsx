import { render, screen } from '@testing-library/react'
import { MediumButton } from '../'

test('renders component successfully', () => {
  render(<MediumButton />)
  const element = screen.getByTestId(/test/i)
  expect(element).toBeInTheDocument()
})
