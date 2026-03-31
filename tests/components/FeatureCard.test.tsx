import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FeatureCard } from '@/components/FeatureCard'

describe('FeatureCard', () => {
  it('renders feature data', () => {
    const feature = {
      id: 1,
      title: 'Online Booking',
      description: 'Patients can book online',
    }

    render(<FeatureCard feature={feature} index={0} />)

    expect(screen.getByText('Online Booking')).toBeInTheDocument()
    expect(screen.getByText('Patients can book online')).toBeInTheDocument()
  })

  it('shows correct index number', () => {
    const feature = {
      id: 2,
      title: 'Reports',
      description: 'View reports',
    }

    render(<FeatureCard feature={feature} index={1} />)

    expect(screen.getByText('02')).toBeInTheDocument()
  })
})
