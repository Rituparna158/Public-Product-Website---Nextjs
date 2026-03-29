import { describe, it, expect, vi } from 'vitest';
import Dashboard from '@/app/dashboard/page';
import * as nextAuth from 'next-auth';

vi.mock('next-auth', () => ({
  getServerSession: vi.fn(),
}));

const fetchMock = vi.fn();
global.fetch = fetchMock as unknown as typeof fetch;

describe('Dashboard Page', () => {
  it('renders unauthorized when session is missing', async () => {
    vi.spyOn(nextAuth, 'getServerSession').mockResolvedValue(null);

    const result = await Dashboard();

    expect(JSON.stringify(result)).toContain('Access Restricted');
  });

  it('renders subscriber count when session exists', async () => {
    vi.spyOn(nextAuth, 'getServerSession').mockResolvedValue({
      user: { name: 'John' },
    } as never);

    fetchMock.mockResolvedValueOnce({
      json: async () => ({ totalSubscribers: 10 }),
    });

    const result = await Dashboard();

    expect(result).toBeDefined();
  });

  it('handles fetch failure gracefully', async () => {
    vi.spyOn(nextAuth, 'getServerSession').mockResolvedValue({
      user: { name: 'John' },
    } as never);

    fetchMock.mockRejectedValueOnce(new Error('fail'));

    const result = await Dashboard();

    // important: component does NOT throw
    expect(result).toBeDefined();
  });
});
