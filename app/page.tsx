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

export default async function Home(): Promise<JSX.Element> {
  const res = await fetchAPI<ApiResponse>('/landing-page?populate=*');
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
