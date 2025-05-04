// src/app/cards/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { getCards } from '@/lib/api/cards';
import CardList from '@/components/cards/CardList';
import { CardResponseDto } from '@/types/card';

export default function CardPage() {
  const [cards, setCards] = useState<CardResponseDto[]>([]);

  useEffect(() => {
    getCards()
      .then(setCards)
      .catch(err => console.error(err));
  }, []);
  if (!cards) {
    return <div className="text-center">Đang tải...</div>;
  }

  if (cards instanceof Error) {
    return <div className="text-center">Có lỗi xảy ra: {cards.message}</div>;
  }
  if (!Array.isArray(cards)) {
    return <div className="text-center">Dữ liệu không hợp lệ</div>;
  }
  if (cards.length === 0) {
    return <div className="text-center">Không có thẻ nào</div>;
  }
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Danh sách thẻ</h1>
      <CardList cards={cards} />
    </main>
  );
}
