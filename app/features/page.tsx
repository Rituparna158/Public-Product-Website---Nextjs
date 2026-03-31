//export const dynamic = 'force-dynamic';
import { fetchAPI } from '@/lib/api';
import { FeatureResponse } from '@/types/Feature';
import { FeatureCard } from '@/components/FeatureCard';
import { SectionHeader } from '@/components/SectionHeader';
import { PAGE_CONTENT } from '@/constants/pageContent';

export const metadata = {
  title: 'Healthcare Features',
  description:
    'Explore powerful healthcare features like patient management, appointments, and analytics.',
  openGraph: {
    title: 'Healthcare Features',
    description:
      'Explore powerful healthcare features like patient management, appointments, and analytics.',
    type: 'website',
  },
};

export default async function FeaturesPage() {
  const res = await fetchAPI<FeatureResponse>('/features');

  const features = res?.data || [];

  return (
    <main className="page-bg">
      <div className="section page-content">
        <SectionHeader {...PAGE_CONTENT.features} />

        <div className="use-cases-grid">
          {features.map((feature, i) => (
            <FeatureCard key={feature.id} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
