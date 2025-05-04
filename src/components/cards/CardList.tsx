'use client';

import CardItem from './CardItem';
import { CardResponseDto } from '@/types/card';

interface Props {
  cards: CardResponseDto[];
}

export default function CardList({ cards }: Props) {
  if (cards.length === 0) {
    return <div className="text-gray-500">Không có thẻ nào</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {cards.map(card => (
        <CardItem key={card.id} card={card} />
      ))}
    </div>
  );
}
