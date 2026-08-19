import { 
  Clock, 
  Package, 
  Truck, 
  CheckCircle, 
  ShoppingBag, 
  LayoutGrid, 
  Store, 
  Percent 
} from 'lucide-react';

// --- Mock Data ---
const MOCK_STATS = {
  newOrders: 12,
  preparing: 5,
  withCourier: 8,
  delivered: 145,
  products: 324,
  categories: 16,
  branches: 3,
  activeOffers: 24,
};

const MOCK_RECENT_ORDERS = [
  { id: 'ORD-9821', customer: 'أحمد علي', total: 45000, status: 'NEW', date: 'منذ 10 دقائق' },
  { id: 'ORD-9820', customer: 'مريم حسين', total: 12500, status: 'PREPARING', date: 'منذ 45 دقيقة' },
  { id: 'ORD-9819', customer: 'مصطفى كامل', total: 89000, status: 'WITH_COURIER', date: 'منذ ساعتين' },
  { id: 'ORD-9818', customer: 'زينب محمد', total: 34000, status: 'DELIVERED', date: 'منذ 3 ساعات' },
  { id: 'ORD-9817', customer: 'علي حسن', total: 15000, status: 'REJECTED', date: 'منذ 5 ساعات' },
  { id: 'ORD-9816', customer: 'سارة يوسف', total: 22000, status: 'ACCEPTED', date: 'منذ 6 ساعات' },
];

const STATUS_MAP: Record<string, { label: string; color: string }> = {
  NEW: { label: 'طلب جديد', color: 'bg-orange-100 text-orange-700 border-orange-200' },
  ACCEPTED: { label: 'تم قبول الطلب', color: 'bg-blue-100 text-blue-700 border-blue-200' },
  PREPARING: { label: 'جاري التجهيز', color: 'bg-purple-100 text-purple-700 border-purple-200' },
  WITH_COURIER: { label: 'بيد المندوب', color: 'bg-indigo-100 text-indigo-700 border-indigo-200' },
  DELIVERED: { label: 'تم التسليم', color: 'bg-green-100 text-green-700 border-green-200' },
  REJECTED: { label: 'تم الرفض', color: 'bg-red-100 text-red-700 border-red-200' },
};

export default function HomeView() {
  const statCards = [
    { title: 'طلبات جديدة', value: MOCK_STATS.newOrders, icon: Clock, color: 'text-orange-500', bg: 'bg-orange-100' },
    { title: 'جاري التجهيز', value: MOCK_STATS.preparing, icon: Package, color: 'text-purple-500', bg: 'bg-purple-100' },
    { title: 'بيد المندوب', value: MOCK_STATS.withCourier, icon: Truck, color: 'text-indigo-500', bg: 'bg-indigo-100' },
    { title: 'تم التسليم', value: MOCK_STATS.delivered, icon: CheckCircle, color: 'text-green-500', bg: 'bg-green-100' },
    { title: 'المنتجات', value: MOCK_STATS.products, icon: ShoppingBag, color: 'text-blue-500', bg: 'bg-blue-100' },
    { title: 'الأقسام', value: MOCK_STATS.categories, icon: LayoutGrid, color: 'text-teal-500', bg: 'bg-teal-100' },
    { title: 'الفروع', value: MOCK_STATS.branches, icon: Store, color: 'text-pink-500', bg: 'bg-pink-100' },
    { title: 'عروض فعالة', value: MOCK_STATS.activeOffers, icon: Percent, color: 'text-rose-500', bg: 'bg-rose-100' },
  ];

  return (
    <div className="space-y-6 md:space-y-8 animate-in fade-in duration-300">
      
      {/* Header section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">نظرة عامة</h2>
        <p className="text-gray-500 text-sm mt-1">إحصائيات وأداء المتجر اليوم</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {statCards.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col justify-between items-start transition-transform hover:-translate-y-1">
              <div className={`p-2 rounded-xl ${stat.bg} ${stat.color} mb-3`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-gray-500 text-xs md:text-sm font-semibold mb-1">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value.toLocaleString('ar-IQ')}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 md:p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h3 className="font-bold text-lg text-gray-900">أحدث الطلبات</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-right text-sm">
            <thead className="bg-gray-50 text-gray-500 border-b border-gray-100">
              <tr>
                <th className="px-4 py-3 font-semibold whitespace-nowrap">رقم الطلب</th>
                <th className="px-4 py-3 font-semibold whitespace-nowrap">الزبون</th>
                <th className="px-4 py-3 font-semibold whitespace-nowrap">المبلغ</th>
                <th className="px-4 py-3 font-semibold whitespace-nowrap">الحالة</th>
                <th className="px-4 py-3 font-semibold whitespace-nowrap">الوقت</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {MOCK_RECENT_ORDERS.map((order, idx) => {
                const status = STATUS_MAP[order.status] || STATUS_MAP.NEW;
                return (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-4 py-4 font-semibold text-gray-900 whitespace-nowrap">
                      {order.id}
                    </td>
                    <td className="px-4 py-4 text-gray-600 whitespace-nowrap">
                      {order.customer}
                    </td>
                    <td className="px-4 py-4 font-bold text-[#055C33] whitespace-nowrap">
                      {order.total.toLocaleString('ar-IQ')} د.ع
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className={`px-2.5 py-1 rounded-md text-xs font-bold border ${status.color}`}>
                        {status.label}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-gray-400 text-xs whitespace-nowrap">
                      {order.date}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          
          {MOCK_RECENT_ORDERS.length === 0 && (
            <div className="p-8 text-center text-gray-400">
              لا توجد طلبات حديثة
            </div>
          )}
        </div>
      </div>
      
    </div>
  );
}
