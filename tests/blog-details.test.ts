import { describe, it, expect, vi } from 'vitest';
import BlogDetail from '@/app/blog/[slug]/page';
import * as api from '@/lib/api';

vi.mock('@/lib/api', () => ({
  fetchAPI: vi.fn(),
}));

describe('Blog Detail', () => {
  it('renders blog content (success)', async () => {
    vi.spyOn(api, 'fetchAPI').mockResolvedValue({
      data: [
        {
          slug: 'hello',
          title: 'Hello',
          content: 'World',
        },
      ],
    } as never);

    const result = await BlogDetail({
      params: Promise.resolve({ slug: 'hello' }),
    });

    expect(result).toBeDefined();
  });

  it('returns not found', async () => {
    vi.spyOn(api, 'fetchAPI').mockResolvedValue({
      data: [],
    } as never);

    const result = await BlogDetail({
      params: Promise.resolve({ slug: 'missing' }),
    });

    expect(result.props.children).toContain('Blog not found');
  });
});
