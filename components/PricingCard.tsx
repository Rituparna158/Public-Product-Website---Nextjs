import { PriceProps } from '@/types/Pricing';
import { Button } from '@/components/ui/button';

export function PricingCard({ plan, highlight }: PriceProps) {
  return (
    <div
      className="card"
      style={{
        border: highlight ? '2px solid var(--sage)' : undefined,
        transform: highlight ? 'scale(1.03)' : undefined,
      }}
    >
      <h2>{plan.name}</h2>

      <p className="price">₹{plan.price}</p>
      <p className="price-sub">per month</p>

      <ul className="feature-list">
        {plan.features?.map((block, i) => (
          <li key={i}>{block.children.map((c) => c.text).join('')}</li>
        ))}
      </ul>

      <Button className="btn-main">Get Started</Button>
    </div>
  );
}
