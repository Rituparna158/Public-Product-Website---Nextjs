import { describe, it, expect, vi } from 'vitest';
import BlogPage from '@/app/blog/page';
import * as api from '@/lib/api';

vi.mock('@/lib/api', () => ({
  fetchAPI: vi.fn(),
}));

describe('Blog Page', () => {
  it('renders blogs (success)', async () => {
    vi.spyOn(api, 'fetchAPI').mockResolvedValue({
      data: [
        {
          id: 1,
          title: 'Test Blog',
          slug: 'test-blog',
          excerpt: 'desc',
        },
      ],
    } as never);

    const result = await BlogPage();

    expect(result).toBeDefined();
  });

  it('handles empty blogs', async () => {
    vi.spyOn(api, 'fetchAPI').mockResolvedValue({
      data: [],
    } as never);

    const result = await BlogPage();

    expect(result).toBeDefined();
  });
});
