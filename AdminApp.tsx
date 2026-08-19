import { useState } from 'react';
import { LayoutDashboard, Package, Tag, Settings, LogOut, Plus, Edit2, Trash2 } from 'lucide-react';
import { useAppContext } from '../shared/context/AppContext';

export default function AdminApp() {
  const [activeTab, setActiveTab] = useState('products');
  const { products, deleteProduct } = useAppContext();

  return (
    <div className="flex h-screen bg-[#F4F9F6] text-right" dir="rtl">
      {/* Sidebar */}
      <aside className="w-64 bg-[#055C33] text-white flex flex-col shadow-xl z-10">
        <div className="p-6 border-b border-white/10">
          <h2 className="text-xl font-bold text-white">لوحة الإدارة</h2>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <button onClick={() => setActiveTab('dashboard')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${activeTab === 'dashboard' ? 'bg-white/20 text-white font-bold' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}>
            <LayoutDashboard className="w-5 h-5" />
            لوحة القيادة
          </button>
          <button onClick={() => setActiveTab('products')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${activeTab === 'products' ? 'bg-white/20 text-white font-bold' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}>
            <Package className="w-5 h-5" />
            المنتجات
          </button>
          <button onClick={() => setActiveTab('categories')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${activeTab === 'categories' ? 'bg-white/20 text-white font-bold' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}>
            <Tag className="w-5 h-5" />
            الأقسام
          </button>
          <button onClick={() => setActiveTab('settings')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${activeTab === 'settings' ? 'bg-white/20 text-white font-bold' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}>
            <Settings className="w-5 h-5" />
            الإعدادات
          </button>
        </nav>
        
        <div className="p-4 border-t border-white/10">
          <a href="/" className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition font-bold">
            <LogOut className="w-4 h-4" />
            العودة للمتجر
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {activeTab === 'products' && (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900">إدارة المنتجات</h1>
              <button className="bg-[#055C33] text-white px-5 py-2.5 rounded-lg flex items-center gap-2 font-bold hover:bg-[#044727] transition">
                <Plus className="w-5 h-5" />
                إضافة منتج
              </button>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <table className="w-full text-right">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 font-bold text-gray-600">المنتج</th>
                    <th className="px-6 py-4 font-bold text-gray-600">السعر</th>
                    <th className="px-6 py-4 font-bold text-gray-600">القسم</th>
                    <th className="px-6 py-4 font-bold text-gray-600">إجراءات</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {products.slice(0, 10).map((product) => (
                    <tr key={product.id} className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img src={product.image} alt={product.name} className="w-12 h-12 rounded-lg object-cover bg-gray-100" />
                          <div>
                            <p className="font-bold text-gray-900">{product.name}</p>
                            <p className="text-sm text-gray-500">{product.size}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-bold text-[#055C33]">{product.price} {product.currency}</td>
                      <td className="px-6 py-4 text-gray-600">{product.categoryId}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button onClick={() => deleteProduct(product.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="p-4 border-t border-gray-200 text-center text-sm text-gray-500">
                يعرض 10 منتجات من أصل {products.length}
              </div>
            </div>
          </div>
        )}
        
        {activeTab !== 'products' && (
           <div className="flex flex-col items-center justify-center h-[60vh] text-gray-400">
             <div className="text-6xl mb-4 opacity-50">🚧</div>
             <p className="font-bold text-xl">قريباً...</p>
             <p className="mt-2">هذه الصفحة قيد التطوير</p>
           </div>
        )}
      </main>
    </div>
  );
}
