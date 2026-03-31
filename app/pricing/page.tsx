//export const dynamic = 'force-dynamic';
import { fetchAPI } from '@/lib/api';
import { PricingResponse } from '@/types/Pricing';
import { PricingCard } from '@/components/PricingCard';
import { SectionHeader } from '@/components/SectionHeader';
import { PAGE_CONTENT } from '@/constants/pageContent';

export const metadata = {
  title: 'Pricing Plans',
  description:
    'Simple and transparent pricing plans for clinics and healthcare providers.',
  openGraph: {
    title: 'Pricing Plans',
    description:
      'Simple and transparent pricing plans for clinics and healthcare providers.',
    type: 'website',
  },
};

export default async function PricingPage() {
  const res = await fetchAPI<PricingResponse>('/pricing-plans');

  const plans = res?.data || [];

  return (
    <main className="page-bg">
      <div className="section page-content">
        <SectionHeader {...PAGE_CONTENT.pricing} />

        <div className="grid-3">
          {plans.map((plan, i) => (
            <PricingCard key={plan.id} plan={plan} highlight={i === 1} />
          ))}
        </div>
      </div>
    </main>
  );
}
