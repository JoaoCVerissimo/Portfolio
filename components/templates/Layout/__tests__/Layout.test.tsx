import React from 'react'
import { render, screen } from '@testing-library/react'
import { Layout } from '../'

test('renders component successfully', () => {
  render(<Layout />)
  const element = screen.getByTestId(/test/i)
  expect(element).toBeInTheDocument()
})
