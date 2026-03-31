import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import CTASection from '@/components/CTA'

describe('CTASection', () => {
  it('renders main texts', () => {
    const hero = {
      ctaText: 'Get Started',
      ctaLink: '/start',
    }

    render(<CTASection hero={hero} />)

    expect(
      screen.getByText('Ready to transform your clinic?')
    ).toBeInTheDocument()

    expect(screen.getByText('Get Started')).toBeInTheDocument()
  })

  it('has correct CTA link', () => {
    const hero = {
      ctaText: 'Try Now',
      ctaLink: '/try',
    }

    render(<CTASection hero={hero} />)

    const link = screen.getByRole('link', { name: /try now/i })
    expect(link).toHaveAttribute('href', '/try')
  })

  it('renders secondary button', () => {
    const hero = {
      ctaText: 'Join',
      ctaLink: '/join',
    }

    render(<CTASection hero={hero} />)

    expect(screen.getByText('See all features')).toBeInTheDocument()
  })
})
