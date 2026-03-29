import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

vi.mock('@/components/ui/button', () => ({
  Button: ({ children }: { children: React.ReactNode }) => (
    <button>{children}</button>
  ),
}));

import { PricingCard } from '@/components/PricingCard';
import type { PricingPlan } from '@/types/Pricing';

describe('PricingCard', () => {
  const mockPlan: PricingPlan = {
    id: 1,
    name: 'Basic',
    price: 999,
    features: [
      {
        children: [{ text: 'Feature 1' }],
      },
      {
        children: [{ text: 'Feature 2' }],
      },
    ],
  };

  it('renders plan name and price', () => {
    render(<PricingCard plan={mockPlan} />);

    expect(screen.getByText(/basic/i)).toBeInTheDocument();
    expect(screen.getByText(/₹999/i)).toBeInTheDocument();
  });

  it('renders features list', () => {
    render(<PricingCard plan={mockPlan} />);

    expect(screen.getByText(/feature 1/i)).toBeInTheDocument();
    expect(screen.getByText(/feature 2/i)).toBeInTheDocument();
  });

  it('renders button', () => {
    render(<PricingCard plan={mockPlan} />);
    expect(screen.getByText(/get started/i)).toBeInTheDocument();
  });

  it('handles empty features', () => {
    render(<PricingCard plan={{ ...mockPlan, features: [] }} />);
  });

  it('handles undefined features safely', () => {
    render(<PricingCard plan={{ ...mockPlan, features: undefined }} />);
  });

  it('renders highlight styles safely', () => {
    render(<PricingCard plan={mockPlan} highlight />);
    expect(screen.getByText(/basic/i)).toBeInTheDocument();
  });
});
