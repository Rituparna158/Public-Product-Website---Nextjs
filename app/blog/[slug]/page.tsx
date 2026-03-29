export const dynamic = 'force-dynamic';
import { fetchAPI } from '@/lib/api';
import { BlogDetailResponse, Blog } from '@/types/blog';
import { extractRichText } from '@/utils/extraRichText';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const res = await fetchAPI<BlogDetailResponse>('/blogs');

  const blog = res?.data?.find(
    (b) => b.slug && b.slug.toLowerCase() === slug.toLowerCase(),
  );

  if (!blog) {
    return {
      title: 'Blog Not Found',
      description: 'This blog could not be found.',
    };
  }

  return {
    title: blog.title,
    description: blog.excerpt || 'Read this healthcare article on LifeLine',

    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: 'article',
    },
  };
}
export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const res = await fetchAPI<BlogDetailResponse>('/blogs');

  const blog: Blog | undefined = res?.data?.find(
    (b) => b.slug && b.slug.toLowerCase() === slug.toLowerCase(),
  );

  if (!blog) {
    return <div className="restricted-container">Blog not found</div>;
  }

  const paragraphs = extractRichText(blog.content);

  return (
    <main className="page-bg">
      <article className="blog-detail page-content">
        <h1 className="blog-detail-title">{blog.title}</h1>

        <div className="blog-divider" />

        <div className="blog-content">
          {paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
