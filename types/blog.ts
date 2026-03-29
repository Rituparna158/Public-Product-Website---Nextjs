export interface RichTextChild {
  text: string;
}

export interface RichTextBlock {
  type: string;
  children: RichTextChild[];
}
export interface Blog {
  id: number;
  title: string;
  slug: string | null;
  excerpt: string;
  content: RichTextBlock[] | string;
  coverImage?: BlogImage[];
}

// export interface BlogListResponse {
//   data: Blog[];
// }

export interface BlogDetailResponse {
  data: Blog[];
}

// interface Blog {
//   id: number;
//   title: string;
//   slug: string | null;
//   excerpt: string;
// }

export interface BlogResponse {
  data: Blog[];
}

export interface BlogContentChild {
  text: string;
}

export interface BlogContentBlock {
  children: BlogContentChild[];
}

export interface BlogImage {
  url: string;
}

export interface BlogCardProps {
  blog: Blog;
}
