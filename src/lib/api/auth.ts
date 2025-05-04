'use client';

import { setCookie } from 'cookies-next';

export async function login(email: string, password: string): Promise<void> {
  // Kiểm tra xem email và password có hợp lệ không
  if (!email || !password) {
    throw new Error('Email và mật khẩu không được để trống');
  }
  // Gửi yêu cầu đăng nhập đến API
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    console.error('Đăng nhập thất bại:', errorData);
    throw new Error(errorData.message || 'Đăng nhập thất bại');
  }
  // Nếu đăng nhập thành công, lấy access_token từ phản hồi
  const data = await res.json();
  // Lưu access_token vào cookie
  setCookie('access_token', data.access_token, {
    maxAge: 60 * 60, // 1 giờ
    path: '/',
  });
  // Chuyển hướng đến trang chính hoặc trang bạn muốn
  //   window.location.href = '/cards';
}
