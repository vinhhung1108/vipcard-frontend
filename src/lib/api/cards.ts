import { getTokenFromCookie } from '@/app/utils/token';
import { CardResponseDto } from '@/types/card';

export async function getCards(): Promise<CardResponseDto[]> {
  const token = getTokenFromCookie();

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cards`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch cards');
  }

  return res.json();
}
