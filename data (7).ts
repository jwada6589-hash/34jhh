export const categories = [
  { id: 1, name: 'البقالة', image: 'https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?auto=format&fit=crop&q=80&w=150&h=150' },
  { id: 2, name: 'المنظفات', image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80&w=150&h=150' },
  { id: 3, name: 'الخضروات', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=150&h=150' },
  { id: 4, name: 'العناية الشخصية', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=150&h=150' },
  { id: 5, name: 'الحلويات', image: 'https://images.unsplash.com/photo-1582293041079-7814c2f12063?auto=format&fit=crop&q=80&w=150&h=150' },
];

export const baseProducts = [
  { id: 1, categoryId: 1, name: 'أرز بسمتي سيلا', size: '5 كغم', price: '12,500', numericPrice: 12500, currency: 'د.ع', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: 2, categoryId: 1, name: 'زيت دوار الشمس', size: '1.8 لتر', price: '6,750', numericPrice: 6750, currency: 'د.ع', image: 'https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: 3, categoryId: 1, name: 'سكر أبيض', size: '2 كغم', price: '2,250', numericPrice: 2250, currency: 'د.ع', image: 'https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: 4, categoryId: 1, name: 'معكرونة سباغيتي', size: '400 غم', price: '1,000', numericPrice: 1000, currency: 'د.ع', image: 'https://images.unsplash.com/photo-1612965607446-25e1332775ae?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: 5, categoryId: 1, name: 'حليب مجفف', size: '900 غم', price: '9,500', numericPrice: 9500, currency: 'د.ع', image: 'https://images.unsplash.com/photo-1528750717929-32abb73d3bd9?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: 6, categoryId: 2, name: 'سائل غسيل الصحون', size: '1 لتر', price: '2,000', numericPrice: 2000, currency: 'د.ع', image: 'https://images.unsplash.com/photo-1584820927498-cafe5c152a55?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: 7, categoryId: 3, name: 'طماطم طازجة', size: '1 كغم', price: '1,500', numericPrice: 1500, currency: 'د.ع', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: 8, categoryId: 4, name: 'شامبو للشعر', size: '400 مل', price: '5,000', numericPrice: 5000, currency: 'د.ع', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=200&h=200' },
  { id: 9, categoryId: 5, name: 'شوكولاتة بالحليب', size: '100 غم', price: '1,500', numericPrice: 1500, currency: 'د.ع', image: 'https://images.unsplash.com/photo-1582293041079-7814c2f12063?auto=format&fit=crop&q=80&w=200&h=200' },
];

export const allProducts = Array.from({ length: 45 }).map((_, index) => {
  const base = baseProducts[index % baseProducts.length];
  return {
    ...base,
    id: index + 1,
  };
});
