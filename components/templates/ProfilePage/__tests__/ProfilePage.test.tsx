import { render, screen } from '@testing-library/react'
import { ProfilePage } from '../'

test('renders component successfully', () => {
  render(<ProfilePage />)
  const element = screen.getByTestId(/test/i)
  expect(element).toBeInTheDocument()
})
