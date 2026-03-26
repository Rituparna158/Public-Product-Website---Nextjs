import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, CheckCircle } from './Icons';
import { HeroProps } from '@/types/Hero';

export default function HeroSection({ hero }: HeroProps): JSX.Element {
  const benefits = [
    'HIPAA-compliant data security',
    'Real-time appointment sync',
    'Automated patient reminders',
    'Integrated billing & records',
  ];

  const titleParts = hero.title.split(' ');

  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-blob" />
      <div className="hero-blob-2" />

      {/* LEFT */}
      <div className="hero-left">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Trusted by 500+ clinics across India
        </div>

        <h1 className="hero-title">
          {titleParts.slice(0, 3).join(' ')}{' '}
          <em>{titleParts.slice(3).join(' ')}</em>
        </h1>

        <p className="hero-subtitle">{hero.subtitle}</p>

        <div className="hero-actions">
          <Button asChild className="btn-primary">
            <a href={hero.ctaLink}>
              {hero.ctaText} <ArrowRight />
            </a>
          </Button>

          <Button asChild variant="outline" className="btn-secondary">
            <a href="/features">Explore Features</a>
          </Button>
        </div>

        <div className="hero-benefits">
          {benefits.map((b) => (
            <div key={b} className="hero-benefit">
              <CheckCircle />
              {b}
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT CARD (VERY IMPORTANT PRESERVED UI) */}
      <div className="hero-right">
        <Card className="hero-card">
          <div className="hero-card-header">
            <p className="hero-card-label">Clinic Overview · Today</p>
            <p className="hero-card-title">Dr. Sharma&apos;s Practice</p>
            <p className="hero-card-sub">12 appointments · 2 pending</p>
          </div>

          <div className="hero-card-body">
            {[
              { label: 'Patients seen today', val: '9 / 12', fill: '75%' },
              { label: 'Avg. wait time', val: '6 min', fill: '20%' },
              { label: 'Records updated', val: '100%', fill: '100%' },
            ].map((row) => (
              <div className="hero-mini-stat" key={row.label}>
                <div>
                  <p className="hero-mini-stat-label">{row.label}</p>

                  <div className="hero-mini-progress">
                    <div
                      className="hero-mini-progress-fill"
                      style={{ width: row.fill }}
                    />
                  </div>
                </div>

                <p className="hero-mini-stat-val">{row.val}</p>
              </div>
            ))}
          </div>

          <div className="hero-card-footer">
            <div className="hero-avatar-group">
              {[
                { bg: '#4a7c59', text: 'PS' },
                { bg: '#c9963f', text: 'AM' },
                { bg: '#c8552a', text: 'LN' },
              ].map((av, i) => (
                <div
                  key={i}
                  className="hero-avatar"
                  style={{ background: av.bg }}
                >
                  {av.text}
                </div>
              ))}
            </div>

            <p className="hero-card-footer-text">
              <strong>3 doctors</strong> active right now.
              <br />
              All systems running smoothly.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
