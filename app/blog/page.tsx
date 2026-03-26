import Link from 'next/link';
import { fetchAPI } from '@/lib/api';
import { Card } from '@/components/ui/card';
import { BlogResponse } from '@/types/blog';

export default async function BlogPage(): Promise<JSX.Element> {
  const res = await fetchAPI<BlogResponse>('/blogs');

  return (
    <main className="page-container">
      <h1 className="page-title">Insights & Articles</h1>

      <div className="grid-3">
        {res.data.map((blog) => {
          const href = blog.slug ? `/blog/${blog.slug}` : '#'; // fallback

          return (
            <Link
              key={blog.id}
              href={href}
              className={!blog.slug ? 'pointer-events-none opacity-50' : ''}
            >
              <Card className="blog-card">
                <div className="blog-img" />
                <div className="blog-content">
                  <h2>{blog.title}</h2>
                  <p className="blog-desc">{blog.excerpt}</p>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
