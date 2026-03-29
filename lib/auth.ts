import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { STRAPI_URL } from './config';
import { StrapiAuthResponse } from '@/types/auth';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',

      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        const res = await fetch(`${STRAPI_URL}/auth/local`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            identifier: credentials.email,
            password: credentials.password,
          }),
        });

        if (!res.ok) return null;

        const data: StrapiAuthResponse = await res.json();

        if (!data.user) return null;

        return {
          id: String(data.user.id),
          name: data.user.username,
          email: data.user.email,
          jwt: data.jwt,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.jwt = user.jwt;
      }
      return token;
    },

    async session({ session, token }) {
      if (token.jwt) {
        session.jwt = token.jwt;
      }
      return session;
    },
  },

  session: {
    strategy: 'jwt',
  },

  pages: {
    signIn: '/login',
  },

  secret: process.env.NEXTAUTH_SECRET,
};
