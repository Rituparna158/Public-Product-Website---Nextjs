import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { getDashboardData } from '@/lib/dashboard';

import DashboardHeader from '@/components/DashboardHeader';
import StatsCards from '@/components/StatsCards';
import RecentAppointments from '@/components/RecentAppointments';
import QuickPanel from '@/components/QuickPanel';

import { ShieldIcon } from '@/components/Icons';

export const metadata = {
  title: 'Dashboard',
  description: 'View your clinic dashboard and analytics.',
};

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div className="restricted-container">
        <div className="restricted-icon">
          <ShieldIcon />
        </div>

        <h1 className="restricted-title">Access Restricted</h1>

        <p className="restricted-text">
          You need to sign in to view your dashboard.
        </p>

        <a href="/login" className="restricted-btn">
          Sign in to continue
        </a>
      </div>
    );
  }

  const data = await getDashboardData();

  return (
    <main className="db-page">
      <DashboardHeader name={session.user?.name} />

      <StatsCards
        data={{
          patients: data.patients,
          doctors: data.doctors,
          appointments: data.appointments,
        }}
      />

      <div className="db-content-grid">
        <RecentAppointments appointments={data.recentAppointments} />
        <QuickPanel />
      </div>
    </main>
  );
}
