//export const dynamic = 'force-dynamic';
import { ApiResponse } from '@/types/landing';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/Hero';
import StatsSection from '@/components/Stats';
import TrustBar from '@/components/TrustBar';
import UseCases from '@/components/UseCases';
import TestimonialsSection from '@/components/Testimonials';
import FAQSection from '@/components/FAQ';
import CTASection from '@/components/CTA';
import NewsletterForm from '@/components/NewsletterForm';
import Footer from '@/components/Footer';
import { fetchAPI } from '@/lib/api';

export const metadata = {
  title: 'LifeLine Healthcare Platform',
  description:
    'Manage patients, appointments, billing, and analytics with a modern healthcare platform built for clinics and hospitals.',
  openGraph: {
    title: 'LifeLine Healthcare Platform',
    description:
      'All-in-one healthcare management system for clinics and hospitals.',
    type: 'website',
  },
};

export default async function Home() {
  const res = await fetchAPI<ApiResponse>('/landing-page?populate=*');

  if (!res || !res.data) {
    return <div>Loading...</div>;
  }
  const landing = res.data;

  return (
    <>
      <Navbar />

      <main>
        <HeroSection hero={landing.hero} />
        <StatsSection stats={landing.stats} />
        <TrustBar />
        <UseCases useCases={landing.use_cases} />
        <TestimonialsSection testimonials={landing.testimonials} />
        <FAQSection faqs={landing.faqs} hero={landing.hero} />
        <CTASection hero={landing.hero} />
        <section className="newsletter-section">
          <h2>Stay in the loop</h2>
          <p>
            Get product updates, clinic management tips, and healthcare insights
            — no spam.
          </p>
          <NewsletterForm />
        </section>
        <Footer />
      </main>
    </>
  );
}
