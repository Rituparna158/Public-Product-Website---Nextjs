import {
  AddPatientIcon,
  RecordsIcon,
  BillingIcon,
  AnalyticsIcon,
} from '@/components/Icons';

export const quickLinks = [
  {
    label: 'Add Patient',
    href: '/patients/new',
    icon: <AddPatientIcon />,
  },
  {
    label: 'View Records',
    href: '/records',
    icon: <RecordsIcon />,
  },
  {
    label: 'Billing',
    href: '/billing',
    icon: <BillingIcon />,
  },
  {
    label: 'Analytics',
    href: '/analytics',
    icon: <AnalyticsIcon />,
  },
];

export const healthMetrics = [
  { label: 'Clinic capacity', value: 75 },
  { label: 'Records updated', value: 92 },
  { label: 'Bills cleared', value: 68 },
];
