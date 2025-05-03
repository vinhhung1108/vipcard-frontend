/* src/app/cards/page.tsx */
import { useEffect, useState } from 'react';
import { getCards } from '@/lib/api/cards';
import { CardResponseDto } from '@/types/card';

export default function CardsPage() {
  const [cards, setCards] = useState<CardResponseDto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCards()
      .then(setCards)
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="p-4">Đang tải dữ liệu thẻ...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Danh sách thẻ VIP</h1>
      <table className="w-full table-auto border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Mã thẻ</th>
            <th className="border px-4 py-2">Giá trị</th>
            <th className="border px-4 py-2">Còn lại</th>
            <th className="border px-4 py-2">Hạn dùng</th>
          </tr>
        </thead>
        <tbody>
          {cards.map((card) => (
            <tr key={card.id}>
              <td className="border px-4 py-2">{card.code}</td>
              <td className="border px-4 py-2">{card.value.toLocaleString()} đ</td>
              <td className="border px-4 py-2">{card.remainingValue.toLocaleString()} đ</td>
              <td className="border px-4 py-2">{new Date(card.expireAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
