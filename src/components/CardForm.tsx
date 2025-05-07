'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { api } from '@/lib/api';

export function CardForm() {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    expiryDate: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/cards', formData); // Thay "/cards" bằng endpoint thực tế
      alert('Thêm thẻ thành công!');
      setFormData({ name: '', type: '', expiryDate: '' });
    } catch (error) {
      console.error('Error adding card:', error);
      alert('Lỗi khi thêm thẻ');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-8">
      <Input
        placeholder="Tên thẻ"
        value={formData.name}
        onChange={e => setFormData({ ...formData, name: e.target.value })}
      />
      <Input
        placeholder="Loại thẻ"
        value={formData.type}
        onChange={e => setFormData({ ...formData, type: e.target.value })}
      />
      <Input
        type="date"
        value={formData.expiryDate}
        onChange={e => setFormData({ ...formData, expiryDate: e.target.value })}
      />
      <Button type="submit">Thêm thẻ</Button>
    </form>
  );
}
