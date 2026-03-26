'use client';

import { useState, type FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function NewsletterForm(): JSX.Element {
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        body: JSON.stringify({ email }),
      });

      const data: { message?: string; error?: string } = await res.json();

      if (res.ok) {
        setMessage(data.message ?? 'Subscribed!');
        setEmail('');
      } else {
        setMessage(data.error ?? 'Something went wrong');
      }
    } catch {
      setMessage('Network error');
    }

    setLoading(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row gap-3 justify-center mt-6"
    >
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="w-64"
      />

      <Button type="submit" disabled={loading}>
        {loading ? 'Submitting...' : 'Subscribe'}
      </Button>

      {message && (
        <p className="text-sm text-gray-600 mt-2 w-full text-center">
          {message}
        </p>
      )}
    </form>
  );
}
