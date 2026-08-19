import { useAppContext } from '../../shared/context/AppContext';

export default function Categories({ selectedCategory, onSelectCategory }: any) {
  const { categories } = useAppContext();
  return (
    <div className="mt-6 sticky top-[170px] z-40 bg-[#F8F9FA] pt-2 pb-2 -mx-4 px-4 shadow-[0_4px_10px_-10px_rgba(0,0,0,0.1)]">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[17px] font-bold text-gray-900">الأقسام</h3>
        {selectedCategory ? (
          <button 
            onClick={() => onSelectCategory(null)}
            className="text-[#055C33] text-sm font-semibold hover:underline transition"
          >
            عرض الكل
          </button>
        ) : (
          <button className="text-gray-500 text-sm font-semibold hover:text-gray-800 transition">
            المزيد
          </button>
        )}
      </div>
      
      {/* Horizontal Scroll */}
      <div className="flex overflow-x-auto gap-3 pb-2 -mx-4 px-4 hide-scrollbar">
        {categories.map((cat) => (
          <div 
            key={cat.id} 
            onClick={() => onSelectCategory(cat.id === selectedCategory ? null : cat.id)}
            className="min-w-[80px] cursor-pointer"
          >
            <div className={`w-20 h-24 rounded-[1.25rem] shadow-[0_2px_8px_rgba(0,0,0,0.04)] border flex flex-col items-center justify-start pt-3 relative overflow-hidden transition-all ${selectedCategory === cat.id ? 'bg-[#E8F3ED] border-[#055C33]' : 'bg-white border-gray-100'}`}>
              <div className={`absolute w-[3.25rem] h-[3.25rem] rounded-full top-3 left-1/2 transform -translate-x-1/2 transition-colors ${selectedCategory === cat.id ? 'bg-[#055C33]/20' : 'bg-blue-50/70'}`}></div>
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-12 h-12 rounded-full object-cover z-10 shadow-sm mb-1.5"
              />
              <span className={`text-[10px] font-bold text-center px-1 leading-tight transition-colors ${selectedCategory === cat.id ? 'text-[#055C33]' : 'text-gray-800'}`}>{cat.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
