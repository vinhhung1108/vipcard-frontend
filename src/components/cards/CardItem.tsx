'use client';

import { CardResponseDto } from '@/types/card';

interface Props {
  card: CardResponseDto;
}

export default function CardItem({ card }: Props) {
  return (
    <div className="border p-4 rounded-xl shadow-md space-y-2">
      <div className="text-lg font-semibold text-primary">{card.code}</div>
      <div>Giá trị: {card.value.toLocaleString()}đ</div>
      <div>Còn lại: {card.remainingValue.toLocaleString()}đ</div>
      <div>Hết hạn: {new Date(card.expireAt).toLocaleDateString('vi-VN')}</div>
      <div className="text-sm text-gray-500">
        Tạo lúc: {new Date(card.createdAt).toLocaleString('vi-VN')}
      </div>
    </div>
  );
}
