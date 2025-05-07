'use client';

import { useState, useEffect } from 'react';
import { CardTable } from '@/components/CardTable';
import { Card, getCards } from '@/lib/api';

export default function Home() {
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCards() {
      try {
        const data = await getCards();
        setCards(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    }
    fetchCards();
  }, []);

  if (loading) return <div className="text-center py-8">Đang tải...</div>;
  if (error)
    return <div className="text-center py-8 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Quản lý thẻ</h1>
      <CardTable cards={cards} />
    </div>
  );
}
