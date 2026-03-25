import { Card } from '@/components/ui/card';
import { Calendar, Users, Shield } from './Icons';
import { UseCasesProps } from '@/types/UseCases';

const useCaseIcons: Record<number, JSX.Element> = {
  0: <Calendar />,
  1: <Users />,
  2: <Shield />,
};

export default function UseCasesSection({
  useCases,
}: UseCasesProps): JSX.Element {
  return (
    <section className="section" id="use-cases">
      <div style={{ textAlign: 'center' }}>
        <span className="section-tag">Solutions</span>

        <h2 className="section-title">
          What You Can <em>Do</em>
        </h2>

        <p className="section-sub" style={{ margin: '0 auto' }}>
          Everything your clinic needs — from first appointment to final bill —
          in one beautifully simple platform.
        </p>
      </div>

      <div className="use-cases-grid">
        {useCases.map((item, idx) => (
          <Card className="use-case-card" key={item.id}>
            <span className="uc-number">
              {String(idx + 1).padStart(2, '0')}
            </span>

            <div className="uc-icon">{useCaseIcons[idx] ?? <Shield />}</div>

            <h3 className="uc-title">{item.title}</h3>
            <p className="uc-desc">{item.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
