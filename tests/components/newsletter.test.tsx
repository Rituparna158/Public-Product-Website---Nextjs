import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import NewsletterForm from '@/components/NewsletterForm';

const fetchMock = vi.fn();
global.fetch = fetchMock as unknown as typeof fetch;

describe('NewsletterForm', () => {
  it('submits email successfully', async () => {
    fetchMock.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: 'Subscribed!' }),
    });

    render(<NewsletterForm />);

    const input = screen.getByPlaceholderText('Enter your email');
    fireEvent.change(input, { target: { value: 'test@example.com' } });

    fireEvent.click(screen.getByText('Subscribe'));

    expect(await screen.findByText('Subscribed!')).toBeTruthy();
  });
});
