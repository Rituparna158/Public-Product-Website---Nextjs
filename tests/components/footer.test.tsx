import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Footer from '@/components/Footer'

describe('Footer', () => {
  it('renders footer content', () => {
    render(<Footer />)

    expect(screen.getByText('LifeLine')).toBeInTheDocument()
    expect(
      screen.getByText(/all rights reserved/i)
    ).toBeInTheDocument()
  })

  it('has home link', () => {
    render(<Footer />)

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/')
  })
})



