'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface Card {
  id: string;
  name: string;
  type: string;
  expiryDate: string;
}

interface CardTableProps {
  cards: Card[];
}

export function CardTable({ cards }: CardTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Tên thẻ</TableHead>
          <TableHead>Loại thẻ</TableHead>
          <TableHead>Ngày hết hạn</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cards.map(card => (
          <TableRow key={card.id}>
            <TableCell>{card.id}</TableCell>
            <TableCell>{card.name}</TableCell>
            <TableCell>{card.type}</TableCell>
            <TableCell>{card.expiryDate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
