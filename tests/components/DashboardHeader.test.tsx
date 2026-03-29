import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import DashboardHeader from '@/components/DashboardHeader';

describe('DashboardHeader', () => {
  it('renders first name correctly', () => {
    render(<DashboardHeader name="John Doe" />);
    expect(screen.getByText(/john/i)).toBeInTheDocument();
  });

  it('renders correct greeting', () => {
    vi.spyOn(Date.prototype, 'getHours').mockReturnValue(9);

    render(<DashboardHeader name="Sam" />);
    expect(screen.getByText(/good morning/i)).toBeInTheDocument();

    vi.restoreAllMocks();
  });

  it('falls back to Doctor when name null', () => {
    render(<DashboardHeader name={null} />);
    expect(screen.getByText(/doctor/i)).toBeInTheDocument();
  });

  it('handles undefined name safely', () => {
    render(<DashboardHeader name={undefined} />);
  });
});
