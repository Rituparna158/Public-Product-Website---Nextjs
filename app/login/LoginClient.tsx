'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { toast } from 'sonner';

import { loginSchema } from '@/lib/validation';
import { getErrorMessage } from '@/lib/error-handler';
import { useLoading } from '@/hooks/use-loading';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function LoginClient() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const { loading, start, stop } = useLoading();

  async function handleLogin(): Promise<void> {
    const parsed = loginSchema.safeParse(form);

    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }

    try {
      start();

      const res = await signIn('credentials', {
        email: form.email,
        password: form.password,
        redirect: false,
      });

      if (res?.error) {
        toast.error('Invalid email or password');
        return;
      }

      toast.success('Logged in successfully');

      window.location.href = '/dashboard';
    } catch (error: unknown) {
      toast.error(getErrorMessage(error));
    } finally {
      stop();
    }
  }

  return (
    <div className="login-wrapper">
      <Card className="login-card">
        <h1 className="page-title">Login</h1>

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

        <Button onClick={handleLogin} className="btn-main" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
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
