import api from './axios';

// Interface cho dữ liệu thẻ
export interface Card {
  id: string;
  name: string;
  type: string;
  expiryDate: string;
}

// Lấy danh sách thẻ
export async function getCards(): Promise<Card[]> {
  try {
    const response = await api.get('/cards'); // Thay '/cards' bằng endpoint thực tế
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message || 'Lỗi khi lấy danh sách thẻ.');
    }
    throw new Error('Lỗi khi lấy danh sách thẻ.');
  }
}

// Thêm các hàm khác nếu cần (POST, PUT, DELETE)
export async function createCard(card: Omit<Card, 'id'>): Promise<Card> {
  try {
    const response = await api.post('/cards', card);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message || 'Lỗi khi tạo thẻ.');
    }
    throw new Error('Lỗi khi tạo thẻ.');
  }
}
