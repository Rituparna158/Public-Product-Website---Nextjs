import { DashboardData, StrapiResponse } from '@/types/dashboard';
import { STRAPI_URL } from './config';

export async function getDashboardData(): Promise<DashboardData> {
  try {
    const [pRes, dRes, aRes] = await Promise.all([
      fetch(`${STRAPI_URL}/patients`),
      fetch(`${STRAPI_URL}/doctors`),
      fetch(`${STRAPI_URL}/appointments?populate=*`),
    ]);

    const pData = (await pRes.json()) as StrapiResponse<unknown>;
    const dData = (await dRes.json()) as StrapiResponse<unknown>;
    const aData = (await aRes.json()) as StrapiResponse<{
      id: number;
      date: string;
      lifecycle: string;
      patient?: { name?: string };
      doctor?: { name?: string };
    }>;

    const recentAppointments = aData.data.slice(0, 5).map((a) => ({
      id: a.id,
      date: a.date,
      lifecycle: a.lifecycle,
      patientName: a.patient?.name ?? 'N/A',
      doctorName: a.doctor?.name ?? 'N/A',
    }));

    return {
      patients: pData.meta?.pagination?.total ?? pData.data.length,
      doctors: dData.meta?.pagination?.total ?? dData.data.length,
      appointments: aData.meta?.pagination?.total ?? aData.data.length,
      recentAppointments,
    };
  } catch {
    return {
      patients: 0,
      doctors: 0,
      appointments: 0,
      recentAppointments: [],
    };
  }
}
