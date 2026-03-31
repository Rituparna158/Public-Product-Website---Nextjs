import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import QuickPanel from '@/components/QuickPanel'

describe('QuickPanel', () => {
  it('renders quick links', () => {
    render(<QuickPanel />)

    expect(screen.getByText('Add Patient')).toBeInTheDocument()
    expect(screen.getByText('View Records')).toBeInTheDocument()
  })

  it('renders health metrics', () => {
    render(<QuickPanel />)

    expect(screen.getByText('Clinic capacity')).toBeInTheDocument()
    expect(screen.getByText('75%')).toBeInTheDocument()
  })

  it('renders CTA section', () => {
    render(<QuickPanel />)

    expect(screen.getByText('Upgrade your plan')).toBeInTheDocument()

    const link = screen.getByRole('link', { name: /view plans/i })
    expect(link).toHaveAttribute('href', '/pricing')
  })
})