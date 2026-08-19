import { Bell, Menu, Search } from 'lucide-react';

export default function Header() {
  return (
    <div className="bg-[#055C33] text-white pt-5 pb-6 px-5 rounded-b-[2rem] shadow-sm sticky top-0 z-50">
      {/* Top Bar Navigation */}
      <div className="flex justify-between items-center mb-6">
        <button className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition">
          <Bell className="w-5 h-5 stroke-[1.5]" />
        </button>
        
        <div className="text-center flex flex-col items-center">
          <span className="text-sm font-medium mb-[-4px]">أسواق</span>
          <h1 className="text-3xl font-black tracking-tight leading-none mb-1">المرتضى</h1>
          <div className="flex items-center gap-1 opacity-90">
            <span className="text-[10px]">🌿</span>
            <p className="text-[11px] font-medium">جودة عالية، أسعار مناسبة</p>
            <span className="text-[10px]">🌿</span>
          </div>
        </div>

        <button className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition">
          <Menu className="w-5 h-5 stroke-[1.5]" />
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative mt-2">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-white/70" />
        </div>
        <input
          type="text"
          placeholder="ابحث عن منتج أو فئة..."
          className="w-full bg-[#0A6B3D] border border-[#0A6B3D] text-white placeholder-white/70 rounded-2xl py-3.5 pr-4 pl-12 focus:outline-none focus:ring-1 focus:ring-white/50 text-sm"
        />
      </div>
    </div>
  );
}
