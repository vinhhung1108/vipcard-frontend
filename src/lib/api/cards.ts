// src/lib/api/cards.ts

import { CardResponseDto } from '@/types/card';

export async function getCards(): Promise<CardResponseDto[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/cards`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch cards');
  }

  return res.json();
}
