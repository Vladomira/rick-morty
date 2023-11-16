import DashboardLayout from './dashboard/DashboardLayout';
import { Children } from '../src/types/common';

import '../styles/globals.css';

export const metadata = {
  title: 'Rick and Morty',
  description: 'App for people who love cartoons',
};

export default function RootLayout({ children }: Children) {
  return (
    <html lang="en">
      <body>
        <main>
          <DashboardLayout />
          {children}
        </main>
      </body>
    </html>
  );
}
