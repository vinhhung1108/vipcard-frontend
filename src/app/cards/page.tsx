import { getCards } from '@/lib/api/cards';
import CardList from '@/components/cards/CardList';

export default async function CardsPage() {
  const cards = await getCards();

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Danh sách thẻ</h1>
      <CardList cards={cards} />
    </main>
  );
}
