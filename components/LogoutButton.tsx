'use client';

import { signOut } from 'next-auth/react';

export default function LogoutButton(): JSX.Element {
  return (
    <button
      onClick={() => signOut({ callbackUrl: '/' })}
      className="px-4 py-2 bg-red-500 text-white rounded"
    >
      Logout
    </button>
  );
}
