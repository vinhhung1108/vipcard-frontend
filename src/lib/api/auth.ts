'use client';

import { setCookie } from 'cookies-next';

export async function login(email: string, password: string): Promise<void> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) throw new Error('Đăng nhập thất bại');

  const data = await res.json();
  // Lưu access_token vào cookie
  setCookie('access_token', data.access_token, {
    maxAge: 60 * 60, // 1 giờ
    path: '/',
  });
}
