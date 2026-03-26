'use client';

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';

export default function LiveStats(): JSX.Element {
  const [subscribers, setSubscribers] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch('/api/stats');
        const data = await res.json();
        setSubscribers(data.totalSubscribers);
      } catch (error) {
        console.error('Stats fetch error:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  return (
    <div className="live-stats-wrapper">
      <Card className="live-stats-card">
        <div className="live-stats-bg" />

        <p className="live-stats-number">
          {loading ? '...' : `${subscribers}+`}
        </p>

        <p className="live-stats-label">People Joined Our Platform</p>

        <div className="live-stats-divider" />

        <p className="live-stats-sub">
          Growing every day with clinics across India
        </p>
      </Card>
    </div>
  );
}
