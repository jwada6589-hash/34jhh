import { Order } from './types';

export const MOCK_ORDERS: Order[] = [
  {
    id: 'ord-1',
    orderNumber: 'ORD-9821',
    customerName: 'أحمد علي',
    phone: '07712345678',
    address: 'بغداد، المنصور، حي دراغ',
    landmark: 'قرب مول المنصور',
    createdAt: '2024-05-20T10:30:00Z',
    status: 'NEW',
    subtotal: 42000,
    deliveryFee: 3000,
    total: 45000,
    items: [
      {
        id: 'item-1',
        productId: 'prod-2',
        productName: 'بيبسي',
        image: '🥫',
        options: 'الحجم: 1 لتر، النوع: عادي',
        quantity: 2,
        unitPrice: 1000,
        total: 2000,
      },
      {
        id: 'item-2',
        productId: 'prod-3',
        productName: 'لحم غنم طازج',
        image: '🥩',
        options: 'الوزن: 2 كيلو',
        quantity: 1,
        unitPrice: 40000,
        total: 40000,
      }
    ]
  },
  {
    id: 'ord-2',
    orderNumber: 'ORD-9820',
    customerName: 'مريم حسين',
    phone: '07812345678',
    address: 'بغداد، الكرادة',
    landmark: 'قرب المسرح الوطني',
    createdAt: '2024-05-20T09:15:00Z',
    status: 'PREPARING',
    subtotal: 10000,
    deliveryFee: 2500,
    total: 12500,
    items: [
      {
        id: 'item-3',
        productId: 'prod-1',
        productName: 'خبز لبناني صغير',
        image: '🫓',
        options: '',
        quantity: 10,
        unitPrice: 1000,
        total: 10000,
      }
    ]
  },
  {
    id: 'ord-3',
    orderNumber: 'ORD-9819',
    customerName: 'مصطفى كامل',
    phone: '07512345678',
    address: 'بغداد، الاعظمية',
    landmark: 'قرب جامع ابو حنيفة',
    createdAt: '2024-05-20T08:00:00Z',
    status: 'WITH_COURIER',
    subtotal: 86000,
    deliveryFee: 3000,
    total: 89000,
    items: [
      {
        id: 'item-4',
        productId: 'prod-4',
        productName: 'عصير برتقال طبيعي',
        image: '🧃',
        options: 'الحجم: 1.5 لتر',
        quantity: 3,
        unitPrice: 2000,
        total: 6000,
      }
    ]
  },
  {
    id: 'ord-4',
    orderNumber: 'ORD-9818',
    customerName: 'زينب محمد',
    phone: '07912345678',
    address: 'بغداد، زيونة',
    landmark: 'قرب مول زيونة',
    createdAt: '2024-05-19T18:30:00Z',
    status: 'DELIVERED',
    subtotal: 30000,
    deliveryFee: 4000,
    total: 34000,
    items: [
      {
        id: 'item-5',
        productId: 'prod-5',
        productName: 'دجاج مشوي',
        image: '🍗',
        options: '',
        quantity: 2,
        unitPrice: 15000,
        total: 30000,
      }
    ]
  },
  {
    id: 'ord-5',
    orderNumber: 'ORD-9817',
    customerName: 'علي حسن',
    phone: '07799998888',
    address: 'بغداد، الدورة',
    landmark: 'شارع 60',
    createdAt: '2024-05-19T14:20:00Z',
    status: 'REJECTED',
    rejectReason: 'المنتج غير متوفر حالياً',
    subtotal: 12000,
    deliveryFee: 3000,
    total: 15000,
    items: []
  },
];
