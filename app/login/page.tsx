export const metadata = {
  title: 'Login',
  description:
    'Login to your LifeLine dashboard to manage patients, appointments, and clinic data.',
};

import LoginClient from './LoginClient';

export default function Page() {
  return <LoginClient />;
}
