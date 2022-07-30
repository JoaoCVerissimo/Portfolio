import { render, screen } from '@testing-library/react'
import { SmallInput } from '../'

test('renders component successfully', () => {
  render(<SmallInput />)
  const element = screen.getByTestId(/test/i)
  expect(element).toBeInTheDocument()
})
