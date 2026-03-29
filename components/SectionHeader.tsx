import { HeaderProps } from '@/types/Feature';

export function SectionHeader({ tag, title, sub }: HeaderProps) {
  return (
    <div style={{ marginBottom: '56px' }}>
      <span className="section-tag">{tag}</span>
      <h1 className="section-title">{title}</h1>
      <p className="section-sub">{sub}</p>
    </div>
  );
}
