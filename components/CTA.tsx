import { Button } from '@/components/ui/button';
import { ArrowRight } from './Icons';
import { CTAProps } from '@/types/CTA';

export default function CTASection({ hero }: CTAProps) {
  return (
    <section className="cta-section">
      <div className="cta-bg-circle cta-bg-circle-1" />
      <div className="cta-bg-circle cta-bg-circle-2" />

      <div className="cta-inner">
        <p className="cta-eyebrow">Start today — free setup</p>

        <h2 className="cta-title">Ready to transform your clinic?</h2>

        <p className="cta-sub">
          Join thousands of doctors who trust LifeLine to simplify patient
          management, reduce no-shows, and deliver better care.
        </p>

        <div className="cta-actions">
          <Button asChild className="btn-white">
            <a href={hero.ctaLink}>
              {hero.ctaText} <ArrowRight />
            </a>
          </Button>

          <Button asChild variant="outline" className="btn-ghost">
            <a href="/features">See all features</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
