'use client';

import { StatsCardsProps } from '@/types/dashboard';
import { statsConfig, StatKey } from '@/lib/stats';
import { TrendUpIcon } from '@/components/Icons';

export default function StatsCards({ data }: StatsCardsProps) {
  console.log('Dashboard data:', data);

  return (
    <div className="db-stats-grid">
      {statsConfig.map((stat) => {
        const valueMap: Record<StatKey, number> = {
          patients: data.patients,
          doctors: data.doctors,
          appointments: data.appointments,
        };

        const value = valueMap[stat.key];

        return (
          <div
            key={stat.key}
            className={`db-stat-card db-stat-card--${stat.accent}`}
          >
            {/* Top Section */}
            <div className="db-stat-top">
              <div className={`db-stat-icon db-stat-icon--${stat.accent}`}>
                {stat.icon}
              </div>

              <span className="db-stat-trend">
                <TrendUpIcon /> {stat.trend}
              </span>
            </div>

            {/* VALUE */}
            <p className="db-stat-value">{value.toLocaleString('en-IN')}</p>

            {/* LABEL */}
            <p className="db-stat-label">{stat.label}</p>

            {/* TREND LABEL */}
            <p className="db-stat-trend-label">{stat.trendLabel}</p>
          </div>
        );
      })}
    </div>
  );
}
