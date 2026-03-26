'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { signIn } from 'next-auth/react';

export default function RegisterPage(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleRegister(): Promise<void> {
    const res = await fetch('http://localhost:1337/api/auth/local/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: name,
        email,
        password,
      }),
    });

    const data: { error?: { message: string } } = await res.json();

    if (data.error) {
      alert(data.error.message);
      return;
    }

    alert('Registered successfully');
  }

  return (
    <div className="login-wrapper">
      <Card className="login-card">
        <h1 className="page-title">Register</h1>

        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-field"
        />

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

        <Button onClick={handleRegister} className="btn-main">
          Register
        </Button>

        <div className="auth-divider">OR</div>

        <Button
          onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
          className="btn-google"
        >
          Continue with Google
        </Button>

        <p className="auth-switch-text">
          Already have an account?{' '}
          <Link href="/login" className="auth-link">
            Login
          </Link>
        </p>
      </Card>
    </div>
  );
}
