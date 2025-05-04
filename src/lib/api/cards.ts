export async function getCards() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cards`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
    next: { revalidate: 0 },
  });
  if (!res.ok) throw new Error('Failed to fetch cards');
  return res.json();
}
