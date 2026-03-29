import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Navbar from '@/components/Navbar';

vi.mock('next-auth/react', () => ({
  useSession: () => ({
    data: null,
    status: 'unauthenticated',
  }),
}));

describe('Navbar', () => {
  it('shows login button when not logged in', () => {
    render(<Navbar />);

    expect(screen.getByText('Login')).toBeTruthy();
  });
});
