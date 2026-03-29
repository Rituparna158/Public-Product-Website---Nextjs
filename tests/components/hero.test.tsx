import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import HeroSection from '@/components/Hero';

describe('HeroSection', () => {
  const hero = {
    title: 'Manage Your Clinic Smartly',
    subtitle: 'Best platform',
    ctaText: 'Start Now',
    ctaLink: '/start',
  };

  it('renders title and subtitle', () => {
    render(<HeroSection hero={hero} />);

    expect(screen.getByText(/Manage Your Clinic/i)).toBeTruthy();
    expect(screen.getByText('Best platform')).toBeTruthy();
  });

  it('renders CTA button', () => {
    render(<HeroSection hero={hero} />);

    const link = screen.getByRole('link', { name: /start now/i });
    expect(link.getAttribute('href')).toBe('/start');
  });
});
