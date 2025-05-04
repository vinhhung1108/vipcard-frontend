// src/app/(auth)/layout.tsx
import { ReactNode } from 'react';
import Link from 'next/link';
import { LogoutButton } from '@/components/LogoutButton';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* Navigation */}
      <header className="flex items-center justify-between px-4 py-2 border-b">
        <div className="text-lg font-bold">
          <Link href="/cards">VIPCard Admin</Link>
        </div>
        <div>
          <LogoutButton />
        </div>
      </header>

      {/* Page Content */}
      <main className="p-4">{children}</main>
    </div>
  );
}
