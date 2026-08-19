import { Category, Branch, Product } from './types';

export const MOCK_CATEGORIES: Category[] = [
  { id: 'cat-1', name: 'المخبوزات', image: '🍞' },
  { id: 'cat-2', name: 'المشروبات', image: '🥤' },
  { id: 'cat-3', name: 'اللحوم', image: '🥩' },
];

export const MOCK_BRANCHES: Branch[] = [
  { id: 'br-1', categoryId: 'cat-1', name: 'الخبز العربي', image: '🫓' },
  { id: 'br-2', categoryId: 'cat-1', name: 'المعجنات', image: '🥐' },
  { id: 'br-3', categoryId: 'cat-2', name: 'المشروبات الغازية', image: '🥫' },
  { id: 'br-4', categoryId: 'cat-2', name: 'العصائر الطبيعية', image: '🧃' },
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    branchId: 'br-1',
    categoryId: 'cat-1',
    name: 'خبز لبناني صغير',
    description: 'كيس خبز لبناني طازج يحتوي على 6 أرغفة',
    price: 1000,
    image: '🫓',
    isAvailable: true,
    options: [],
  },
  {
    id: 'prod-2',
    branchId: 'br-3',
    categoryId: 'cat-2',
    name: 'بيبسي',
    description: 'مشروب غازي منعش',
    price: 500,
    image: '🥫',
    isAvailable: true,
    options: [
      { name: 'الحجم', values: ['330 مل', '1 لتر', '2.25 لتر'] },
      { name: 'النوع', values: ['عادي', 'دايت'] },
    ],
  },
];
