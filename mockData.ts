import { Gift, GiftRequest } from './types';

export const MOCK_GIFTS: Gift[] = [
  {
    id: 'gift-1',
    name: 'علبة عصير طبيعي',
    description: 'عصير برتقال طبيعي طازج 1 لتر',
    image: '🧃',
    requiredBalance: 3000,
    quantity: 20,
    redemptionCount: 45,
    isDisabled: false,
  },
  {
    id: 'gift-2',
    name: 'وجبة مجانية',
    description: 'وجبة غداء متكاملة مع مشروب',
    image: '🍱',
    requiredBalance: 15000,
    quantity: 5,
    redemptionCount: 12,
    isDisabled: false,
  },
  {
    id: 'gift-3',
    name: 'قهوة اسبريسو',
    description: 'كوب قهوة اسبريسو فاخر',
    image: '☕',
    requiredBalance: 2500,
    quantity: 0, // Should be OUT_OF_STOCK
    redemptionCount: 150,
    isDisabled: false,
  },
  {
    id: 'gift-4',
    name: 'تيشيرت المتجر',
    description: 'تيشيرت قطني يحمل شعار المتجر',
    image: '👕',
    requiredBalance: 20000,
    quantity: 50,
    redemptionCount: 5,
    isDisabled: true, // DISABLED
  }
];

export const MOCK_GIFT_REQUESTS: GiftRequest[] = [
  {
    id: 'req-1',
    requestNumber: 'GR-1001',
    customerName: 'أحمد علي',
    phone: '07712345678',
    giftName: 'علبة عصير طبيعي',
    usedBalance: 3000,
    createdAt: new Date().toISOString(),
    status: 'PENDING',
  },
  {
    id: 'req-2',
    requestNumber: 'GR-1002',
    customerName: 'مريم حسين',
    phone: '07812345678',
    giftName: 'وجبة مجانية',
    usedBalance: 15000,
    createdAt: new Date(Date.now() - 86400000).toISOString(), // Yesterday
    status: 'APPROVED',
  },
  {
    id: 'req-3',
    requestNumber: 'GR-1003',
    customerName: 'مصطفى كامل',
    phone: '07512345678',
    giftName: 'قهوة اسبريسو',
    usedBalance: 2500,
    createdAt: new Date(Date.now() - 172800000).toISOString(), // 2 Days ago
    status: 'RECEIVED',
  },
  {
    id: 'req-4',
    requestNumber: 'GR-1004',
    customerName: 'زينب محمد',
    phone: '07912345678',
    giftName: 'تيشيرت المتجر',
    usedBalance: 20000,
    createdAt: new Date(Date.now() - 259200000).toISOString(), // 3 Days ago
    status: 'CANCELLED',
  },
];
