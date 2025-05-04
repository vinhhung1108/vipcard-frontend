import Cookies from 'js-cookie';

export function getTokenFromCookie(): string | undefined {
  return Cookies.get('access_token'); // 'access_token' là tên cookie bạn lưu khi login
}
