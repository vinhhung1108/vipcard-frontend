import axios from 'axios';

const api = axios.create({
  baseURL: 'https://apicard.namident.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function getCards() {
  try {
    const response = await api.get('/cards'); // Thay "/cards" bằng endpoint thực tế
    return response.data;
  } catch (error) {
    console.error('Error fetching cards:', error);
    throw error;
  }
}
