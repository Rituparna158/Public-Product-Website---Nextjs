import { BlogContentBlock } from '@/types/blog';

export function extractRichText(
  content: BlogContentBlock[] | string,
): string[] {
  if (typeof content === 'string') {
    return content.split('\n');
  }

  return content.map((block) =>
    block.children.map((child) => child.text).join(''),
  );
}
