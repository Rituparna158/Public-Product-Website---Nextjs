import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import RecentAppointments from '@/components/RecentAppointments'

describe('RecentAppointments', () => {
  it('shows empty state when no data', () => {
    render(<RecentAppointments appointments={[]} />)

    expect(screen.getByText('No appointments found')).toBeInTheDocument()
  })

  it('renders appointment data', () => {
    const appointments = [
      {
        id: 1,
        patientName: 'Rahul Sharma',
        doctorName: 'Dr. Mehta',
        date: '2024-01-10',
        lifecycle: 'confirmed',
      },
    ]

    render(<RecentAppointments appointments={appointments} />)

    expect(screen.getByText('Rahul Sharma')).toBeInTheDocument()
    expect(screen.getByText('Dr. Mehta')).toBeInTheDocument()
  })

  it('renders table headers', () => {
    const appointments = [
      {
        id: 2,
        patientName: 'Amit',
        doctorName: 'Dr. Rao',
        date: '2024-02-10',
        lifecycle: 'pending',
      },
    ]

    render(<RecentAppointments appointments={appointments} />)

    expect(screen.getByText('Patient')).toBeInTheDocument()
    expect(screen.getByText('Doctor')).toBeInTheDocument()
  })
})