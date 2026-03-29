'use client';

import { PlusIcon } from '@/components/Icons';
import { DashboardHeaderProps } from '@/types/DashboarrdHeaders';

export default function DashboardHeader({ name }: DashboardHeaderProps) {
  const firstName = name?.split(' ')[0] ?? 'Doctor';

  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';

  return (
    <div className="db-header">
      <div className="db-header-left">
        <p className="db-greeting-label">{greeting}</p>

        <h1 className="db-greeting-name">
          {firstName}
          <span className="db-greeting-wave">👋</span>
        </h1>

        <p className="db-greeting-sub">
          Here&apos;s your clinic analytics overview for today.
        </p>
      </div>

      <div className="db-header-right">
        <a href="/appointments/new" className="db-new-appt-btn">
          <PlusIcon />
          New Appointment
        </a>
      </div>
    </div>
  );
}
