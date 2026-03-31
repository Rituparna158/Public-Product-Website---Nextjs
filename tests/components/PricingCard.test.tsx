import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { PricingCard } from '@/components/PricingCard'

describe('PricingCard', () => {
  const plan = {
    id: 1,
    name: 'Basic Plan',
    price: 499,
    features: [
      { children: [{ text: 'Feature One' }] },
      { children: [{ text: 'Feature Two' }] },
    ],
  }

  it('renders plan name and price', () => {
    render(<PricingCard plan={plan} />)

    expect(screen.getByText('Basic Plan')).toBeInTheDocument()
    expect(screen.getByText('₹499')).toBeInTheDocument()
  })

  it('renders features list', () => {
    render(<PricingCard plan={plan} />)

    expect(screen.getByText('Feature One')).toBeInTheDocument()
    expect(screen.getByText('Feature Two')).toBeInTheDocument()
  })

  it('renders button', () => {
    render(<PricingCard plan={plan} />)

    expect(screen.getByText('Get Started')).toBeInTheDocument()
  })
})
