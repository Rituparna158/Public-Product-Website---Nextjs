'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { toast } from 'sonner';

import { registerSchema } from '@/lib/validation';
import { getErrorMessage, getStrapiErrorMessage } from '@/lib/error-handler';
import { useLoading } from '@/hooks/use-loading';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { STRAPI_URL } from '@/lib/config';

export default function RegisterClient() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { loading, start, stop } = useLoading();

  async function handleRegister(): Promise<void> {
    const parsed = registerSchema.safeParse(form);

    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }

    try {
      start();

      const res = await fetch(`${STRAPI_URL}/auth/local/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: form.name,
          email: form.email,
          password: form.password,
        }),
      });

      const data: unknown = await res.json();

      if (!res.ok) {
        toast.error(getStrapiErrorMessage(data));
        return;
      }

      toast.success('Account created 🎉');

      await signIn('credentials', {
        email: form.email,
        password: form.password,
        callbackUrl: '/dashboard',
      });
    } catch (error: unknown) {
      toast.error(getErrorMessage(error));
    } finally {
      stop();
    }
  }

  return (
    <div className="login-wrapper">
      <Card className="login-card">
        <h1 className="page-title">Create Account</h1>

        <Input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="input-field"
        />

        <Input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="input-field"
        />

        <Input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="input-field"
        />

        <Button
          onClick={handleRegister}
          className="btn-main"
          disabled={loading}
        >
          {loading ? 'Creating...' : 'Register'}
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
