import { Card } from '@/components/ui/card';
import { Star } from './Icons';
import { TestimonialsProps } from '@/types/Testimonials';

export default function TestimonialsSection({
  testimonials,
}: TestimonialsProps): JSX.Element {
  return (
    <section className="testimonials-section">
      <div style={{ textAlign: 'center' }}>
        <span className="section-tag">Testimonials</span>

        <h2 className="section-title">
          Doctors Love It. <em>Patients Feel It.</em>
        </h2>

        <p className="section-sub" style={{ margin: '0 auto' }}>
          Real feedback from clinics that made the switch to LifeLine.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <Card className="testimonial-card" key={i}>
            {/* STARS */}
            <div className="stars">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} />
              ))}
            </div>

            {/* FEEDBACK */}
            <p className="testimonial-quote">“{t.feedback}”</p>

            {/* AUTHOR */}
            <div className="testimonial-author">
              <div className="t-avatar">{t.initials}</div>

              <div>
                <p className="t-name">{t.name}</p>
                <p className="t-role">{t.role}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
