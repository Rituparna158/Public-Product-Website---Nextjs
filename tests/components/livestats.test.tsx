import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import LiveStats from '@/components/LiveStats';

const fetchMock = vi.fn();
global.fetch = fetchMock as unknown as typeof fetch;

describe('LiveStats', () => {
  it('shows loading initially', () => {
    render(<LiveStats />);

    expect(screen.getByText('...')).toBeTruthy();
  });

  it('shows fetched subscribers', async () => {
    fetchMock.mockResolvedValueOnce({
      json: async () => ({ totalSubscribers: 99 }),
    });

    render(<LiveStats />);

    await waitFor(() => {
      expect(screen.getByText('99+')).toBeTruthy();
    });
  });
});
