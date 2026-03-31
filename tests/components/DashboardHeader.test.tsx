import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import DashboardHeader from '@/components/DashboardHeader'

describe('DashboardHeader', () => {
  it('shows first name from full name', () => {
    render(<DashboardHeader name="Rahul Sharma" />)

    expect(screen.getByText(/Rahul/)).toBeInTheDocument()
  })

  it('falls back to Doctor when name is missing', () => {
    render(<DashboardHeader name={null} />)

    expect(screen.getByText(/Doctor/)).toBeInTheDocument()
  })

  it('renders greeting text', () => {
    render(<DashboardHeader name="Test User" />)

    const greeting = screen.getByText(/good/i)
    expect(greeting).toBeInTheDocument()
  })

  it('renders new appointment button', () => {
    render(<DashboardHeader name="User" />)

    const btn = screen.getByRole('link', { name: /new appointment/i })
    expect(btn).toHaveAttribute('href', '/appointments/new')
  })
})


