import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import FAQSection from '@/components/FAQ';

describe('FAQSection', () => {
  const props = {
    hero: {
      title: 'Test Title',
      subtitle: 'Test Subtitle',
      ctaText: 'Get Started',
      ctaLink: '/start',
    },
    faqs: [
      {
        id: 1,
        question: 'What is this?',
        answer: 'Test answer',
      },
    ],
  };

  it('renders FAQ question', () => {
    render(<FAQSection {...props} />);

    expect(screen.getByText('What is this?')).toBeTruthy();
  });

  it('renders CTA link', () => {
    render(<FAQSection {...props} />);

    const link = screen.getByRole('link', { name: /get started/i });
    expect(link.getAttribute('href')).toBe('/start');
  });
});
