import Link from 'next/link';
import Image from 'next/image';
import { BlogCardProps } from '@/types/blog';
import { STRAPI_BASE } from '@/lib/config';

export function BlogCard({ blog }: BlogCardProps) {
  const href = blog.slug ? `/blog/${blog.slug}` : '#';

  const BASE_URL = STRAPI_BASE.replace('/api', '');

  const imageUrl = blog.coverImage?.[0]?.url
    ? `${BASE_URL}${blog.coverImage[0].url}`
    : '/placeholder.jpg';

  return (
    <Link
      href={href}
      className={!blog.slug ? 'pointer-events-none opacity-50' : ''}
    >
      <div className="blog-card">
        <div className="blog-img" style={{ position: 'relative', height: 200 }}>
          <Image
            src={imageUrl}
            alt={blog.title}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, 33vw"
            unoptimized
          />
        </div>

        <div className="blog-content">
          <h3>{blog.title}</h3>
          <p className="blog-desc">{blog.excerpt}</p>
        </div>
      </div>
    </Link>
  );
}
