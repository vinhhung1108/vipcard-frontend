'use client';

import { useState, useEffect } from 'react';
import { CardTable } from '@/components/CardTable';
import { getCards } from '@/lib/api';

export default function Home() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCards() {
      try {
        const data = await getCards();
        setCards(data);
      } catch (err) {
        console.error('Error fetching cards:', err);
        setError('Không thể tải danh sách thẻ');
      } finally {
        setLoading(false);
      }
    }
    fetchCards();
  }, []);

  if (loading) return <div className="text-center py-8">Đang tải...</div>;
  if (error)
    return <div className="text-center py-8 text-destructive">{error}</div>;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Quản lý thẻ</h1>
      <CardTable cards={cards} />
    </div>
  );
}
