import { describe, it, expect, vi } from 'vitest';
import * as route from '@/app/api/subscribe/route';

// mock fetch safely
const fetchMock = vi.fn();
global.fetch = fetchMock as unknown as typeof fetch;

describe('API Routes - Subscribers', () => {
  // ---------- GET ----------

  it('returns subscriber count (success)', async () => {
    fetchMock.mockResolvedValueOnce({
      json: async () => ({
        meta: { pagination: { total: 50 } },
      }),
    });

    const res = await route.GET();
    const data = await res.json();

    expect(res.status).toBe(200);
    expect(data.totalSubscribers).toBe(50);
  });

  it('returns fallback on failure', async () => {
    fetchMock.mockRejectedValueOnce(new Error('fail'));

    const res = await route.GET();
    const data = await res.json();

    expect(res.status).toBe(500);
    expect(data.totalSubscribers).toBe(0);
  });

  // ---------- POST ----------

  it('creates subscriber (success)', async () => {
    fetchMock
      // duplicate check
      .mockResolvedValueOnce({
        json: async () => ({ data: [] }),
      })
      // create subscriber
      .mockResolvedValueOnce({
        ok: true,
      });

    const req = new Request('http://localhost', {
      method: 'POST',
      body: JSON.stringify({ email: 'test@example.com' }),
    });

    const res = await route.POST(req);
    const data = await res.json();

    expect(res.status).toBe(200);
    expect(data.message).toBe('Subscribed successfully');
  });

  it('rejects invalid email', async () => {
    const req = new Request('http://localhost', {
      method: 'POST',
      body: JSON.stringify({ email: 'bad-email' }),
    });

    const res = await route.POST(req);
    const data = await res.json();

    expect(res.status).toBe(400);
    expect(data.error).toBe('Invalid email');
  });

  it('rejects duplicate subscriber', async () => {
    fetchMock.mockResolvedValueOnce({
      json: async () => ({
        data: [{ id: 1 }],
      }),
    });

    const req = new Request('http://localhost', {
      method: 'POST',
      body: JSON.stringify({ email: 'test@example.com' }),
    });

    const res = await route.POST(req);
    const data = await res.json();

    expect(res.status).toBe(400);
    expect(data.error).toBe('Already subscribed');
  });

  it('handles server error in POST', async () => {
    fetchMock.mockRejectedValueOnce(new Error('fail'));

    const req = new Request('http://localhost', {
      method: 'POST',
      body: JSON.stringify({ email: 'test@example.com' }),
    });

    const res = await route.POST(req);
    const data = await res.json();

    expect(res.status).toBe(500);
    expect(data.error).toBe('Failed to subscribe');
  });
});
