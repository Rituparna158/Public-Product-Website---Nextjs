export interface RichTextChild {
  text: string
}

export interface RichTextBlock {
  type: string;
  children: RichTextChild[]
}
export interface Blog {
  id: number;
  title: string;
  slug: string | null;
  excerpt: string;
  content: RichTextBlock[] | string;
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
 