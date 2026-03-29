'use client';

import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { HeartPulse } from 'lucide-react';
import { getInitials } from '@/constants/navbar';

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <nav className="nav">
      <Link href="/" className="nav-logo">
        <span className="nav-logo-icon">
          <HeartPulse />
        </span>
        LifeLine
      </Link>

      {/* LINKS */}
      <ul className="nav-links">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/features">Features</Link>
        </li>
        <li>
          <Link href="/pricing">Pricing</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
      </ul>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3">
        {status === 'loading' ? null : session ? (
          <>
            {/* USER NAME */}
            <div className="nav-avatar">{getInitials(session.user?.name)}</div>

            {/* LOGOUT */}
            <Button
              onClick={() => signOut({ callbackUrl: '/' })}
              className="nav-cta"
            >
              Logout
            </Button>
          </>
        ) : (
          <Button asChild className="nav-cta">
            <Link href="/login">Login</Link>
          </Button>
        )}
      </div>
    </nav>
  );
}
