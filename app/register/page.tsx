export const dynamic = 'force-dynamic';
export const metadata = {
  title: 'Create Account',
  description:
    'Create your LifeLine account and start managing your healthcare operations efficiently.',
};

import RegisterClient from './RegisterClient';

export default function Page() {
  return <RegisterClient />;
}
