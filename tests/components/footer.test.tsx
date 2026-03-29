import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '@/components/Footer';

describe('Footer', () => {
  it('renders footer content', () => {
    render(<Footer />);

    expect(screen.getByText('LifeLine')).toBeTruthy();
    expect(screen.getByText(/Made with care/i)).toBeTruthy();
  });
});
