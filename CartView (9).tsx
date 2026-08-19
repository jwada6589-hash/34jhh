import { ArrowRight, Trash2, Plus, Minus } from 'lucide-react';

export default function CartView({ items, updateQuantity, onViewChange }: any) {
  const subtotal = items.reduce((acc: number, item: any) => acc + (item.numericPrice * item.quantity), 0);
  const deliveryFee = subtotal > 0 ? 3000 : 0;
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-full flex flex-col bg-[#F8F9FA] pb-6">
      <div className="bg-white px-4 py-4 sticky top-0 z-20 flex items-center justify-between shadow-sm">
        <button onClick={() => onViewChange('home')} className="p-2 hover:bg-gray-100 rounded-full transition">
          <ArrowRight className="w-5 h-5 text-gray-800" />
        </button>
        <h2 className="text-lg font-bold text-gray-900">سلة المشتريات</h2>
        <div className="w-9"></div> {/* spacer */}
      </div>

      <div className="flex-1 px-4 py-4">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-center">
            <img src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" alt="Empty Cart" className="w-32 h-32 mb-4 opacity-50 grayscale" />
            <h3 className="text-gray-900 font-bold text-lg mb-1">السلة فارغة</h3>
            <p className="text-gray-500 text-sm mb-6">لم تقم بإضافة أي منتجات إلى سلتك بعد.</p>
            <button onClick={() => onViewChange('home')} className="bg-[#055C33] text-white font-bold py-3 px-8 rounded-full shadow-sm hover:bg-[#044727] transition">
              تصفح المنتجات
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {items.map((item: any) => (
              <div key={item.id} className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100 flex gap-3 items-center">
                <div className="w-20 h-20 bg-gray-50 rounded-xl p-2 flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                </div>
                
                <div className="flex-1">
                  <h4 className="text-gray-900 font-bold text-sm mb-0.5 leading-tight">{item.name}</h4>
                  <p className="text-gray-500 text-xs mb-2">{item.size}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[#055C33] font-black">{(item.numericPrice * item.quantity).toLocaleString()}</span>
                    <span className="text-[#055C33] text-[10px] font-bold">د.ع</span>
                  </div>
                </div>
                
                <div className="flex flex-col items-end justify-between h-full py-1">
                  <button onClick={() => updateQuantity(item.id, -item.quantity)} className="text-gray-400 hover:text-red-500 p-1 mb-2">
                    <Trash2 className="w-4 h-4" />
                  </button>
                  
                  <div className="bg-gray-100 rounded-lg flex items-center p-1">
                    <button onClick={() => updateQuantity(item.id, 1)} className="w-6 h-6 flex items-center justify-center bg-white rounded-md shadow-sm text-gray-800 font-bold hover:text-[#055C33]">
                      <Plus className="w-3 h-3" />
                    </button>
                    <span className="w-8 text-center text-xs font-bold text-gray-900">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, -1)} className="w-6 h-6 flex items-center justify-center bg-white rounded-md shadow-sm text-gray-800 font-bold hover:text-[#055C33]">
                      <Minus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {items.length > 0 && (
        <div className="bg-white p-5 rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.05)] mx-2 border border-gray-100 mb-2">
          <h3 className="font-bold text-gray-900 mb-4 text-sm">ملخص الطلب</h3>
          
          <div className="space-y-2 mb-4 text-sm">
            <div className="flex justify-between text-gray-600">
              <span>المجموع الفرعي</span>
              <span className="font-bold text-gray-900">{subtotal.toLocaleString()} د.ع</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>رسوم التوصيل</span>
              <span className="font-bold text-gray-900">{deliveryFee.toLocaleString()} د.ع</span>
            </div>
          </div>
          
          <div className="border-t border-dashed border-gray-200 pt-3 mb-5 flex justify-between items-center">
            <span className="font-bold text-gray-900">الإجمالي</span>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-black text-[#055C33]">{total.toLocaleString()}</span>
              <span className="text-[#055C33] text-xs font-bold">د.ع</span>
            </div>
          </div>
          
          <button className="w-full bg-[#055C33] text-white font-bold py-3.5 rounded-2xl shadow-[0_4px_12px_rgba(5,92,51,0.3)] hover:bg-[#044727] transition flex justify-center items-center gap-2">
            إتمام الطلب
            <ArrowRight className="w-5 h-5 transform rotate-180" />
          </button>
        </div>
      )}
    </div>
  );
}
