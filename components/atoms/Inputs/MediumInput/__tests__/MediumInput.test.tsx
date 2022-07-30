import React from 'react'
import { render, screen } from '@testing-library/react'
import { MediumInput } from '../'

test('renders component successfully', () => {
  render(<MediumInput />)
  const element = screen.getByTestId(/test/i)
  expect(element).toBeInTheDocument()
})
