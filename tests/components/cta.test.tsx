import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CTASection from '@/components/CTA';

describe('CTASection', () => {
  const hero = {
    ctaLink: '/signup',
    ctaText: 'Get Started',
  };

  it('renders CTA text', () => {
    render(<CTASection hero={hero} />);

    expect(screen.getByText('Ready to transform your clinic?')).toBeTruthy();
    expect(screen.getByText('Get Started')).toBeTruthy();
  });

  it('renders correct link', () => {
    render(<CTASection hero={hero} />);

    const link = screen.getByRole('link', { name: /get started/i });
    expect(link.getAttribute('href')).toBe('/signup');
  });
});
