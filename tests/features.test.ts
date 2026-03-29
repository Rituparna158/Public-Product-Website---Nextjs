import { describe, it, expect, vi } from 'vitest';
import FeaturesPage from '@/app/features/page';
import * as api from '@/lib/api';

vi.mock('@/lib/api', () => ({
  fetchAPI: vi.fn(),
}));

describe('Features Page', () => {
  it('renders features', async () => {
    vi.spyOn(api, 'fetchAPI').mockResolvedValue({
      data: [
        {
          id: 1,
          title: 'Feature 1',
          description: 'Desc',
        },
      ],
    } as never);

    const result = await FeaturesPage();

    expect(result).toBeDefined();
  });

  it('handles empty features', async () => {
    vi.spyOn(api, 'fetchAPI').mockResolvedValue({
      data: [],
    } as never);

    const result = await FeaturesPage();

    expect(result).toBeDefined();
  });
});
