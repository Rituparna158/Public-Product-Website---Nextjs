import Providers from '@/providers';
import './globals.css';
import Navbar from '@/components/Navbar';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn('font-sans', inter.variable)}>
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Toaster position="top-center" richColors />
        </Providers>
      </body>
    </html>
  );
}
