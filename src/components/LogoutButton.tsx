'use client';

import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

export function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    deleteCookie('access_token');
    router.push('/login');
  };

  return (
    <button onClick={handleLogout} className="text-red-500 hover:underline">
      Đăng xuất
    </button>
  );
}
