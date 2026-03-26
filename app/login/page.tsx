'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function LoginPage(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(): Promise<void> {
    await signIn('credentials', {
      email,
      password,
      callbackUrl: '/dashboard',
    });
  }

  return (
    <div className="login-wrapper">
      <Card className="login-card">
        <h1 className="page-title">Login</h1>

        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />

        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />

        <Button onClick={handleLogin} className="btn-main">
          Login
        </Button>

        <p className="auth-switch-text">
          Don’t have an account?{' '}
          <Link href="/register" className="auth-link">
            Register
          </Link>
        </p>
      </Card>
    </div>
  );
}
