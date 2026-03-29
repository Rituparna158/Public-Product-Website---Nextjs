import LiveStats from '@/components/LiveStats';
import { Card } from '@/components/ui/card';
import { StatsProps } from '@/types/Stats';

export default function StatsSection({ stats }: StatsProps) {
  return (
    <section className="stats-section">
      <div className="stats-inner">
        <Card className="stat-box">
          <p className="stat-number">
            {stats.patients.toLocaleString()}
            <span>+</span>
          </p>
          <p className="stat-label">Patients Served</p>
        </Card>

        <Card className="stat-box">
          <p className="stat-number">
            {stats.doctors.toLocaleString()}
            <span>+</span>
          </p>
          <p className="stat-label">Doctors Connected</p>
        </Card>

        <Card className="stat-box">
          <p className="stat-number">
            {stats.appointments.toLocaleString()}
            <span>+</span>
          </p>
          <p className="stat-label">Appointments Booked</p>
        </Card>
      </div>

      <div className="mt-10">
        <LiveStats />
      </div>
    </section>
  );
}
