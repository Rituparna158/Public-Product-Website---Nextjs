import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import RecentAppointments from '@/components/RecentAppointments';
import type { AppointmentItem } from '@/types/dashboard';

describe('RecentAppointments', () => {
  const mockAppointments: AppointmentItem[] = [
    {
      id: 1,
      patientName: 'John Doe',
      doctorName: 'Dr Smith',
      date: '2025-01-01',
      lifecycle: 'completed',
    },
  ];

  it('renders appointment data', () => {
    render(<RecentAppointments appointments={mockAppointments} />);
    expect(screen.getByText(/john doe/i)).toBeInTheDocument();
    expect(screen.getByText(/dr smith/i)).toBeInTheDocument();
  });

  it('renders correct count', () => {
    render(<RecentAppointments appointments={mockAppointments} />);
    expect(screen.getByText(/last 1 scheduled records/i)).toBeInTheDocument();
  });

  it('shows empty state when no data', () => {
    render(<RecentAppointments appointments={[]} />);
    expect(screen.getByText(/no appointments found/i)).toBeInTheDocument();
  });

  it('handles missing date', () => {
    render(
      <RecentAppointments
        appointments={[{ ...mockAppointments[0], date: '' }]}
      />,
    );

    expect(screen.getByText('—')).toBeInTheDocument();
  });
});
