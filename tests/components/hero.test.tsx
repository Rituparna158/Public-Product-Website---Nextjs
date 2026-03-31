import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import HeroSection from '@/components/Hero'

describe('HeroSection', () => {
  it('renders title and subtitle', () => {
    const hero = {
      title: 'Manage Your Clinic Easily',
      subtitle: 'All in one solution',
      ctaText: 'Get Started',
      ctaLink: '/start',
    }

    render(<HeroSection hero={hero} />)

    expect(screen.getByText(/Manage Your Clinic/)).toBeInTheDocument()
    expect(screen.getByText('All in one solution')).toBeInTheDocument()
  })

  it('has correct CTA link', () => {
    const hero = {
      title: 'Test Title Here',
      subtitle: 'Subtitle',
      ctaText: 'Try Now',
      ctaLink: '/try',
    }

    render(<HeroSection hero={hero} />)

    const link = screen.getByRole('link', { name: /try now/i })
    expect(link).toHaveAttribute('href', '/try')
  })

  it('renders explore features button', () => {
    const hero = {
      title: 'Another Title Example',
      subtitle: 'Subtitle',
      ctaText: 'Start',
      ctaLink: '/start',
    }

    render(<HeroSection hero={hero} />)

    expect(screen.getByText('Explore Features')).toBeInTheDocument()
  })
})
