import { Metadata } from 'next';
import { AdminProvider } from '@/context/AdminContext';

export const metadata: Metadata = {
  title: 'Admin Panel | Key Production',
  description: 'Key Production Admin Dashboard',
  robots: 'noindex, nofollow',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminProvider>
      {children}
    </AdminProvider>
  );
}
