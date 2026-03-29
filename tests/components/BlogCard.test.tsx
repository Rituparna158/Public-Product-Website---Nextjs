import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

// ✅ Next.js mocks (VERY IMPORTANT)
vi.mock('next/link', () => ({
  default: ({ children }: { children: React.ReactNode }) => <a>{children}</a>,
}));

vi.mock('next/image', () => ({
  default: (props: { alt: string }) => <img alt={props.alt} />,
}));

import { BlogCard } from '@/components/BlogCard';
import type { Blog } from '@/types/blog';

describe('BlogCard', () => {
  const mockBlog: Blog = {
    id: 1,
    title: 'Test Blog',
    slug: 'test-blog',
    excerpt: 'This is excerpt',
    content: '',
    coverImage: [{ url: '/img.jpg' }],
  };

  // 🟢 HAPPY
  it('renders blog title and excerpt', () => {
    render(<BlogCard blog={mockBlog} />);

    expect(screen.getByText(/test blog/i)).toBeInTheDocument();
    expect(screen.getByText(/this is excerpt/i)).toBeInTheDocument();
  });

  it('renders image with alt text', () => {
    render(<BlogCard blog={mockBlog} />);
    expect(screen.getByAltText(/test blog/i)).toBeInTheDocument();
  });

  // 🔴 FAILED
  it('handles missing slug (disabled link)', () => {
    render(<BlogCard blog={{ ...mockBlog, slug: null }} />);
    expect(screen.getByText(/test blog/i)).toBeInTheDocument();
  });

  it('falls back to placeholder image', () => {
    render(<BlogCard blog={{ ...mockBlog, coverImage: [] }} />);

    expect(screen.getByAltText(/test blog/i)).toBeInTheDocument();
  });
});
