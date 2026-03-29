import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import StatsCards from '@/components/StatsCards';

describe('StatsCards', () => {
  it('renders stats correctly', () => {
    render(
      <StatsCards data={{ patients: 100, doctors: 10, appointments: 50 }} />,
    );

    expect(screen.getByText('100')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('50')).toBeInTheDocument();
  });

  it('formats large numbers', () => {
    render(
      <StatsCards
        data={{ patients: 1000, doctors: 2000, appointments: 3000 }}
      />,
    );

    expect(screen.getByText('1,000')).toBeInTheDocument();
  });

  it('handles zero values safely', () => {
    render(<StatsCards data={{ patients: 0, doctors: 0, appointments: 0 }} />);

    expect(screen.getAllByText('0').length).toBeGreaterThan(0);
  });
});
