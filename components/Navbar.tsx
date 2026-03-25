import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HeartPulse } from './Icons';
import { Hero } from '@/types/landing';

export default function Navbar({ ctaText, ctaLink }: Hero): JSX.Element {
  return (
    <nav className="nav">
      <Link href="/" className="nav-logo">
        <span className="nav-logo-icon">
          <HeartPulse />
        </span>
        LifeLine
      </Link>

      <ul className="nav-links">
        <li>
          <a href="/features">Features</a>
        </li>
        <li>
          <a href="#use-cases">Solutions</a>
        </li>
        <li>
          <a href="#faq">FAQ</a>
        </li>
        <li>
          <a href="/pricing">Pricing</a>
        </li>
      </ul>

      {/* shadcn Button used */}
      <Button asChild className="nav-cta">
        <a href={ctaLink}>{ctaText}</a>
      </Button>
    </nav>
  );
}
