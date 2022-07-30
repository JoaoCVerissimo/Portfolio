import React from 'react'
import { render, screen } from '@testing-library/react'
import { LargeInput } from '../'

test('renders component successfully', () => {
  render(<LargeInput />)
  const element = screen.getByTestId(/test/i)
  expect(element).toBeInTheDocument()
})
