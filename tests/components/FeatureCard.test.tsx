import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FeatureCard } from '@/components/FeatureCard';
import type { Feature } from '@/types/Feature';

describe('FeatureCard', () => {
  const mockFeature: Feature = {
    id: 1,
    title: 'Feature Title',
    description: 'Feature description',
  };

  it('renders feature title and description', () => {
    render(<FeatureCard feature={mockFeature} index={0} />);

    expect(screen.getByText(/feature title/i)).toBeInTheDocument();
    expect(screen.getByText(/feature description/i)).toBeInTheDocument();
  });

  it('renders correct index number', () => {
    render(<FeatureCard feature={mockFeature} index={0} />);
    expect(screen.getByText('01')).toBeInTheDocument();
  });

  it('handles empty title/description', () => {
    render(
      <FeatureCard
        feature={{ ...mockFeature, title: '', description: '' }}
        index={1}
      />,
    );
  });
});
