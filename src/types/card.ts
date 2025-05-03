export interface CardResponseDto {
  code: string;
  expireAt: string | number | Date;
  remainingValue: number;
  value: number;
  id: string;
  name: string;
  description: string;
}
