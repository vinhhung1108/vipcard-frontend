import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('access_token')?.value;

  // Nếu chưa có token, redirect về /login
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

// Áp dụng middleware cho các route được bảo vệ
export const config = {
  matcher: ['/cards/:path*'], // bảo vệ mọi route bắt đầu bằng /cards
};
// Đoạn mã này sẽ kiểm tra xem người dùng đã đăng nhập hay chưa bằng cách kiểm tra cookie access_token.
// Nếu chưa có cookie này, người dùng sẽ được chuyển hướng đến trang đăng nhập.
// Nếu đã có cookie, yêu cầu sẽ được tiếp tục đến trang mà người dùng đang cố gắng truy cập.
