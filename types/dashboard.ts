export interface StrapiResponse<T> {
  data: T[];
  meta?: {
    pagination?: {
      total?: number;
    };
  };
}

export interface AppointmentItem {
  id: number;
  date: string;
  lifecycle: string;
  patientName: string;
  doctorName: string;
}

export interface DashboardData {
  patients: number;
  doctors: number;
  appointments: number;
  recentAppointments: AppointmentItem[];
}

export interface StatsCardsProps {
  data: Pick<DashboardData, 'patients' | 'doctors' | 'appointments'>;
}

export interface RecentAppointmentsProps {
  appointments: AppointmentItem[];
}
