import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

vi.mock('@/utils/quickpanel', () => ({
  quickLinks: [
    {
      label: 'Add Patient',
      href: '/',
      icon: 'icon',
    },
  ],
  healthMetrics: [{ label: 'Clinic capacity', value: 75 }],
}));

import QuickPanel from '@/components/QuickPanel';

describe('QuickPanel', () => {
  it('renders quick links', () => {
    render(<QuickPanel />);
    expect(screen.getByText(/add patient/i)).toBeInTheDocument();
  });

  it('renders health metrics', () => {
    render(<QuickPanel />);
    expect(screen.getByText(/clinic capacity/i)).toBeInTheDocument();
  });

  it('renders CTA section', () => {
    render(<QuickPanel />);
    expect(screen.getByText(/upgrade your plan/i)).toBeInTheDocument();
  });

  it('handles render without crash', () => {
    render(<QuickPanel />);
  });
});
