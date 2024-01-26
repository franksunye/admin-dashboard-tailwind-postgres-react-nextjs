import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import Nav from './nav';
import Toast from './toast';
import { Suspense } from 'react';

export const metadata = {
  title: 'GPTs for Leads',
  description:
    'A tool for using AI to boost lead generation by unifying and syncing the leads captured easily from GPTs conversations, to help you turn those chat interactions into sales ready leads.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full">
        <Suspense>
          <Nav />
        </Suspense>
        {children}
        <Analytics />
        <Toast />
      </body>
    </html>
  );
}
