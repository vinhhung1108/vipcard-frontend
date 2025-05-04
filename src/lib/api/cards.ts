import { cookies } from 'next/headers';
import { CardResponseDto } from '@/types/card';

export async function getCards(): Promise<CardResponseDto[]> {
  const cookieStore = cookies();
  const token = cookieStore.get('access_token')?.value;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cards`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    console.error('Failed to fetch cards', await res.text());
    throw new Error('Lỗi khi lấy danh sách thẻ');
  }

  return res.json();
}
