export interface Category {
  id: number;
  name: string;
  image: string;
}

export interface SubCategory {
  id: number;
  categoryId: number;
  name: string;
  image: string;
}

export interface ProductOption {
  name: string;
  choices: string[];
}

export interface Product {
  id: number;
  categoryId?: number; // legacy
  subCategoryId: number;
  name: string;
  size?: string;
  description?: string;
  price: string;
  numericPrice: number;
  currency: string;
  image: string;
  options?: ProductOption[];
  isOffer?: boolean;
  offerPrice?: number;
  offerStartAt?: string;
  offerEndAt?: string;
}

export const categories: Category[] = [
  { id: 1, name: 'البقالة', image: 'https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?auto=format&fit=crop&q=80&w=150&h=150' },
  { id: 2, name: 'المنظفات', image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80&w=150&h=150' },
  { id: 3, name: 'الخضروات', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=150&h=150' },
  { id: 4, name: 'العناية الشخصية', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=150&h=150' },
  { id: 5, name: 'الحلويات', image: 'https://images.unsplash.com/photo-1582293041079-7814c2f12063?auto=format&fit=crop&q=80&w=150&h=150' },
];

export const subCategories: SubCategory[] = [
  // البقالة
  { id: 1, categoryId: 1, name: 'الأرز والبقوليات', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=300' },
  { id: 2, categoryId: 1, name: 'الزيوت والسمن', image: 'https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?auto=format&fit=crop&q=80&w=300' },
  { id: 3, categoryId: 1, name: 'المعلبات', image: 'https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&q=80&w=300' },
  // المنظفات
  { id: 4, categoryId: 2, name: 'غسيل الملابس', image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80&w=300' },
  { id: 5, categoryId: 2, name: 'غسيل الصحون', image: 'https://images.unsplash.com/photo-1584820927498-cafe5c152a55?auto=format&fit=crop&q=80&w=300' },
  // الخضروات
  { id: 6, categoryId: 3, name: 'خضار طازجة', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=300' },
  { id: 7, categoryId: 3, name: 'فواكه', image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&q=80&w=300' },
  // العناية الشخصية
  { id: 8, categoryId: 4, name: 'الشعر والجسم', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=300' },
  // الحلويات
  { id: 9, categoryId: 5, name: 'شوكولاتة وبسكويت', image: 'https://images.unsplash.com/photo-1582293041079-7814c2f12063?auto=format&fit=crop&q=80&w=300' },
];

export const baseProducts: Product[] = [
  { id: 1, subCategoryId: 1, name: 'أرز بسمتي سيلا', description: 'أرز بسمتي عالي الجودة وحبة طويلة', size: '5 كغم', price: '12,500', numericPrice: 12500, currency: 'د.ع', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=200&h=200', options: [{ name: 'النوع', choices: ['حبة طويلة', 'حبة قصيرة'] }] },
  { id: 2, subCategoryId: 2, name: 'زيت دوار الشمس', description: 'زيت نباتي صافي للطبخ والقلي', size: '1.8 لتر', price: '6,750', numericPrice: 6750, currency: 'د.ع', image: 'https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?auto=format&fit=crop&q=80&w=200&h=200', isOffer: true, offerPrice: 5000, offerStartAt: '2026-08-01T00:00:00Z', offerEndAt: '2026-08-30T23:59:59Z' },
  { id: 3, subCategoryId: 1, name: 'سكر أبيض', description: 'سكر أبيض نقي ومكرر', size: '2 كغم', price: '2,250', numericPrice: 2250, currency: 'د.ع', image: 'https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=80&w=200&h=200', isOffer: true, offerPrice: 1800, offerStartAt: '2026-08-10T00:00:00Z', offerEndAt: '2026-08-25T23:59:59Z' },
  { id: 4, subCategoryId: 1, name: 'معكرونة سباغيتي', description: 'معكرونة سريعة التحضير', size: '400 غم', price: '1,000', numericPrice: 1000, currency: 'د.ع', image: 'https://images.unsplash.com/photo-1612965607446-25e1332775ae?auto=format&fit=crop&q=80&w=200&h=200', isOffer: true, offerPrice: 750, offerStartAt: '2026-08-01T00:00:00Z', offerEndAt: '2026-08-15T23:59:59Z' }, // Expired offer
  { id: 5, subCategoryId: 1, name: 'حليب مجفف', description: 'حليب مجفف كامل الدسم', size: '900 غم', price: '9,500', numericPrice: 9500, currency: 'د.ع', image: 'https://images.unsplash.com/photo-1528750717929-32abb73d3bd9?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: 6, subCategoryId: 5, name: 'سائل غسيل الصحون', description: 'سائل مركز برائحة الليمون', size: '1 لتر', price: '2,000', numericPrice: 2000, currency: 'د.ع', image: 'https://images.unsplash.com/photo-1584820927498-cafe5c152a55?auto=format&fit=crop&q=80&w=200&h=200', options: [{ name: 'الرائحة', choices: ['ليمون', 'تفاح', 'صنوبر'] }] },
  { id: 7, subCategoryId: 6, name: 'طماطم طازجة', description: 'طماطم محلية طازجة', size: '1 كغم', price: '1,500', numericPrice: 1500, currency: 'د.ع', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=200&h=200', isOffer: true, offerPrice: 1000, offerStartAt: '2026-08-18T00:00:00Z', offerEndAt: '2026-08-22T23:59:59Z' },
  { id: 8, subCategoryId: 8, name: 'شامبو للشعر', description: 'شامبو لجميع أنواع الشعر', size: '400 مل', price: '5,000', numericPrice: 5000, currency: 'د.ع', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=200&h=200', options: [{ name: 'النوع', choices: ['لشعر الجاف', 'لشعر الدهني'] }] },
  { id: 9, subCategoryId: 9, name: 'شوكولاتة بالحليب', description: 'شوكولاتة سويسرية غنية', size: '100 غم', price: '1,500', numericPrice: 1500, currency: 'د.ع', image: 'https://images.unsplash.com/photo-1582293041079-7814c2f12063?auto=format&fit=crop&q=80&w=200&h=200', options: [{ name: 'النكهة', choices: ['بالحليب', 'بالبندق', 'داكنة'] }, { name: 'الحجم', choices: ['صغير', 'كبير'] }] },
];

export const allProducts: Product[] = Array.from({ length: 45 }).map((_, index) => {
  const base = baseProducts[index % baseProducts.length];
  return {
    ...base,
    id: index + 1,
  };
});
