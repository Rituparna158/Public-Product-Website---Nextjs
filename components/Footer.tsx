import Link from 'next/link';
import { HeartPulse } from './Icons';

export default function Footer() {
  return (
    <footer className="footer">
      <Link href="/" className="footer-logo">
        <span className="footer-logo-icon">
          <HeartPulse />
        </span>
        LifeLine
      </Link>
      <span>
        © {new Date().getFullYear()} LifeLine Health Technologies. All rights
        reserved.
      </span>
      <span>Made with care for clinicians.</span>
    </footer>
  );
}
