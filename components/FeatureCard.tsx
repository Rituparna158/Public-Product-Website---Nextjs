import { FeatureCardProps } from '@/types/Feature';

export function FeatureCard({ feature, index }: FeatureCardProps) {
  return (
    <div className="use-case-card">
      <div className="uc-number">{String(index + 1).padStart(2, '0')}</div>

      <div className="uc-icon">⚕️</div>

      <h3 className="uc-title">{feature.title}</h3>
      <p className="uc-desc">{feature.description}</p>
    </div>
  );
}
