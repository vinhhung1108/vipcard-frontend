'use client';

import { CardResponseDto } from '@/types/card';

interface CardListProps {
  cards: CardResponseDto[];
}

export default function CardList({ cards }: CardListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {cards.map(card => (
        <div key={card.id} className="p-4 border rounded shadow">
          <h2 className="text-xl font-semibold">{card.code}</h2>
          <p>Giá trị: {card.value.toLocaleString()} VND</p>
          <p>Còn lại: {card.remainingValue.toLocaleString()} VND</p>
          <p>Hạn sử dụng: {new Date(card.expireAt).toLocaleDateString()}</p>
          <div className="mt-2">
            <strong>Dịch vụ:</strong>
            <ul className="list-disc list-inside">
              {card.services.map(service => (
                <li key={service.id}>{service.name}</li>
              ))}
            </ul>
          </div>
          <div className="mt-2">
            <strong>Đối tác:</strong>
            <ul className="list-disc list-inside">
              {card.partners.map(partner => (
                <li key={partner.id}>{partner.name}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
