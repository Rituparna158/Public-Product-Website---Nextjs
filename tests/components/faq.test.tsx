import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import FAQSection from '@/components/FAQ'

type FAQ = {
  id: number
  question: string
  answer: string
}

type Hero = {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
}

describe('FAQSection', () => {
  it('renders faq questions', () => {
    const faqs: FAQ[] = [
      {
        id: 1,
        question: 'What is LifeLine?',
        answer: 'Clinic management system',
      },
      {
        id: 2,
        question: 'Is it free?',
        answer: 'Yes, basic version is free',
      },
    ]

    const hero: Hero = {
      title: 'Test Title',
      subtitle: 'Test Subtitle',
      ctaText: 'Start Free',
      ctaLink: '/start',
    }

    render(<FAQSection faqs={faqs} hero={hero} />)

    expect(screen.getByText('What is LifeLine?')).toBeInTheDocument()
    expect(screen.getByText('Is it free?')).toBeInTheDocument()
  })

  it('renders CTA link correctly', () => {
    const faqs: FAQ[] = [
      { id: 1, question: 'Q1', answer: 'A1' },
    ]

    const hero: Hero = {
      title: 'Another Title',
      subtitle: 'Another Subtitle',
      ctaText: 'Join Now',
      ctaLink: '/join',
    }

    render(<FAQSection faqs={faqs} hero={hero} />)

    const link = screen.getByRole('link', {
      name: /get started free/i,
    })

    expect(link).toHaveAttribute('href', '/join')
  })

  it('renders heading text', () => {
    const faqs: FAQ[] = []

    const hero: Hero = {
      title: 'Title',
      subtitle: 'Subtitle',
      ctaText: 'Click',
      ctaLink: '/test',
    }

    render(<FAQSection faqs={faqs} hero={hero} />)

    expect(screen.getByText(/common/i)).toBeInTheDocument()
    expect(screen.getByText(/questions/i)).toBeInTheDocument()
  })
})