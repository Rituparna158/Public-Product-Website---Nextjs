//export const dynamic = 'force-dynamic';
import { fetchAPI } from '@/lib/api';
import { BlogResponse } from '@/types/blog';
import { BlogCard } from '@/components/BlogCard';
import { SectionHeader } from '@/components/SectionHeader';
import { PAGE_CONTENT } from '@/constants/pageContent';

export const metadata = {
  title: 'Healthcare Blog',
  description:
    'Read insights, articles, and updates on healthcare technology and patient management.',
  openGraph: {
    title: 'Healthcare Blog',
    description:
      'Read insights, articles, and updates on healthcare technology and patient management.',
    type: 'website',
  },
};

export default async function BlogPage() {
  const res = await fetchAPI<BlogResponse>('/blogs?populate=*');

  const blogs = res?.data || [];

  return (
    <main className="page-bg">
      <div className="section page-content">
        <SectionHeader {...PAGE_CONTENT.blog} />

        <div className="grid-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </main>
  );
}
