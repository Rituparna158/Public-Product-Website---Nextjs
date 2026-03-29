import { describe, it, expect, vi } from 'vitest';
import PricingPage from '@/app/pricing/page';
import * as api from '@/lib/api';

vi.mock('@/lib/api', () => ({
  fetchAPI: vi.fn(),
}));

describe('Pricing Page', () => {
  it('renders plans', async () => {
    vi.spyOn(api, 'fetchAPI').mockResolvedValue({
      data: [
        {
          id: 1,
          name: 'Basic',
          price: 100,
          features: [
            {
              children: [{ text: 'Feature A' }],
            },
          ],
        },
      ],
    } as never);

    const result = await PricingPage();

    expect(result).toBeDefined();
  });

  it('handles empty plans', async () => {
    vi.spyOn(api, 'fetchAPI').mockResolvedValue({
      data: [],
    } as never);

    const result = await PricingPage();

    expect(result).toBeDefined();
  });
});
