import { ReactNode } from 'react';
import { PatientIcon, DoctorIcon, CalendarIcon } from '@/components/Icons';

export type StatKey = 'patients' | 'doctors' | 'appointments';

export interface StatItem {
  key: StatKey;
  label: string;
  icon: ReactNode;
  trend: string;
  trendLabel: string;
  accent: 'sage' | 'gold' | 'ink';
}

export const statsConfig: StatItem[] = [
  {
    key: 'patients',
    label: 'Total Patients',
    icon: <PatientIcon />,
    trend: '+12%',
    trendLabel: 'vs last month',
    accent: 'sage',
  },
  {
    key: 'doctors',
    label: 'Active Doctors',
    icon: <DoctorIcon />,
    trend: '+2',
    trendLabel: 'new this week',
    accent: 'gold',
  },
  {
    key: 'appointments',
    label: 'Total Appointments',
    icon: <CalendarIcon />,
    trend: '+8%',
    trendLabel: 'vs last month',
    accent: 'sage',
  },
];

export function formatStatValue(value: number): string {
  return value.toLocaleString('en-IN');
}
