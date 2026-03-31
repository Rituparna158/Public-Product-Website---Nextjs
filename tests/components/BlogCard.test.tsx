vi.mock('next/link', () => ({
  default: ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href}>{children}</a>
  ),
}))
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { BlogCard } from '@/components/BlogCard'

type Blog = {
  id: number
  title: string
  slug: string | null
  excerpt: string
  content: string
  coverImage?: { url: string }[]
}

describe('BlogCard', () => {
  it('renders blog title and excerpt', () => {
    const blog: Blog = {
      id: 1,
      title: 'Test Blog',
      slug: 'test-blog',
      excerpt: 'This is test excerpt',
      content: '',
    }

    render(<BlogCard blog={blog} />)

    expect(screen.getByText('Test Blog')).toBeInTheDocument()
    expect(screen.getByText('This is test excerpt')).toBeInTheDocument()
  })

  it('uses correct link when slug exists', () => {
    const blog: Blog = {
      id: 2,
      title: 'Another Blog',
      slug: 'another-blog',
      excerpt: 'desc',
      content: '',
    }

    render(<BlogCard blog={blog} />)

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/blog/another-blog')
  })

  it('disables link when slug is null', () => {
    const blog: Blog = {
      id: 3,
      title: 'No Slug Blog',
      slug: null,
      excerpt: 'desc',
      content: '',
    }

    render(<BlogCard blog={blog} />)

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '#')
  })

  it('uses placeholder image if no cover image', () => {
    const blog: Blog = {
      id: 4,
      title: 'Image Test',
      slug: 'img-test',
      excerpt: 'desc',
      content: '',
    }

    render(<BlogCard blog={blog} />)

    const img = screen.getByAltText('Image Test') as HTMLImageElement
    expect(img.src).toContain('placeholder.jpg')
  })
})
