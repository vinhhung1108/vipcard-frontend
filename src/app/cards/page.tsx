'use client';

import { useEffect, useState } from 'react';
import { getCards } from '@/lib/api/cards';
import { CardResponseDto } from '@/types/card';

export default function CardListPage() {
  const [cards, setCards] = useState<CardResponseDto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCards() {
      try {
        const data = await getCards();
        setCards(data);
      } catch (error) {
        console.error('Error fetching cards:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchCards();
  }, []);

  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Danh sách thẻ VIP</h1>
      {loading ? (
        <p>Đang tải dữ liệu...</p>
      ) : cards.length === 0 ? (
        <p>Chưa có thẻ nào.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map(card => (
            <div
              key={card.id}
              className="border p-4 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2">{card.code}</h2>
              <p className="text-sm">
                Giá trị: {card.value.toLocaleString()} đ
              </p>
              <p className="text-sm">
                Còn lại: {card.remainingValue.toLocaleString()} đ
              </p>
              <p className="text-sm">
                Hạn sử dụng: {new Date(card.expireAt).toLocaleDateString()}
              </p>
              <div className="mt-2">
                <p className="text-sm font-medium">Dịch vụ áp dụng:</p>
                <ul className="list-disc list-inside text-sm">
                  {card.services.map(s => (
                    <li key={s.id}>{s.name}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-2">
                <p className="text-sm font-medium">Áp dụng tại:</p>
                <ul className="list-disc list-inside text-sm">
                  {card.partners.map(p => (
                    <li key={p.id}>{p.name}</li>
                  ))}
                </ul>
              </div>
              {card.referralCode && (
                <p className="text-sm mt-2">
                  Mã giới thiệu: {card.referralCode.code}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
