export interface Service {
  id: number;
  name: string;
  description?: string;
}

export interface Partner {
  id: number;
  name: string;
  address: string;
  phone?: string;
  email?: string;
}

export interface ReferralCode {
  id: number;
  code: string;
  description?: string;
}

export interface CardResponseDto {
  id: number;
  code: string;
  value: number;
  remainingValue: number;
  expireAt: string;
  createdAt: string;
  updatedAt: string;
  services: Service[];
  partners: Partner[];
  referralCode?: ReferralCode;
}
