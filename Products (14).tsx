import { useState, useMemo } from 'react';
import { Heart, ShoppingCart, Plus, Minus } from 'lucide-react';
import { useAppContext } from '../../shared/context/AppContext';

export default function Products({ selectedCategory, onAddToCart, cartItems, updateQuantity, favorites, toggleFavorite }: any) {
  const { products: allProducts } = useAppContext();
  const [displayedCount, setDisplayedCount] = useState(20);
  const [showFavorites, setShowFavorites] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = allProducts;
    
    if (showFavorites) {
      result = result.filter(p => favorites.includes(p.id));
    }
    
    if (selectedCategory) {
      result = result.filter(p => p.categoryId === selectedCategory);
    }
    
    return result;
  }, [selectedCategory, showFavorites, favorites]);

  const visibleProducts = filteredProducts.slice(0, displayedCount);
  const hasMore = displayedCount < filteredProducts.length;

  const loadMore = () => {
    setDisplayedCount(prev => Math.min(prev + 20, filteredProducts.length));
  };

  // Reset displayed count when category changes
  useMemo(() => {
    setDisplayedCount(20);
  }, [selectedCategory]);

  return (
    <div className="mt-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[17px] font-bold text-gray-900">
          {showFavorites ? 'المفضلة' : selectedCategory ? 'المنتجات' : 'منتجات مختارة'}
        </h3>
        <div className="flex items-center gap-3">
          {selectedCategory && !showFavorites && (
            <span className="text-gray-500 text-sm font-semibold">{filteredProducts.length} منتج</span>
          )}
          <button 
            onClick={() => setShowFavorites(!showFavorites)}
            className={`text-sm font-semibold flex items-center gap-1 transition ${showFavorites ? 'text-red-500' : 'text-gray-500 hover:text-gray-800'}`}
          >
            المفضلة <Heart className={`w-4 h-4 ${showFavorites ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        {visibleProducts.map((product) => {
          const cartItem = cartItems.find((item: any) => item.id === product.id);
          const isFavorite = favorites.includes(product.id);
          
          return (
          <div key={product.id} className="bg-white rounded-2xl p-2 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col relative overflow-hidden">
            <button 
              onClick={() => toggleFavorite(product.id)}
              className={`absolute top-3 right-3 bg-white/70 backdrop-blur-md p-1.5 rounded-full z-10 transition shadow-sm ${isFavorite ? 'text-red-500' : 'text-gray-500 hover:text-red-500'}`}
            >
              <Heart className={`w-[16px] h-[16px] stroke-[2] ${isFavorite ? 'fill-current' : ''}`} />
            </button>
            
            <div className="h-32 mb-2 w-full relative rounded-xl overflow-hidden bg-gray-50">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover mix-blend-multiply"
              />
            </div>
            
            <div className="flex-1 flex flex-col items-center text-center px-1">
              <h4 className="text-gray-900 font-bold text-xs leading-tight mb-1">{product.name}</h4>
              <span className="text-gray-500 text-[10px] mb-2">{product.size}</span>
              
              <div className="mt-auto mb-2 flex items-baseline gap-1">
                <span className="text-gray-900 font-black text-sm">{product.price}</span>
                <span className="text-gray-600 text-[9px] font-bold">{product.currency}</span>
              </div>
              
              {cartItem ? (
                <div className="w-full bg-[#E8F3ED] text-[#055C33] py-1.5 rounded-xl flex items-center justify-between px-2 text-sm font-bold border border-[#055C33]/20">
                  <button onClick={() => updateQuantity(product.id, 1)} className="p-1 hover:bg-[#055C33]/10 rounded-full">
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs">{cartItem.quantity}</span>
                  <button onClick={() => updateQuantity(product.id, -1)} className="p-1 hover:bg-[#055C33]/10 rounded-full">
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button onClick={() => onAddToCart(product)} className="w-full bg-[#055C33] hover:bg-[#044727] text-white py-1.5 rounded-xl flex items-center justify-center gap-1 text-[11px] font-bold transition">
                  <ShoppingCart className="w-[12px] h-[12px]" />
                  أضف
                </button>
              )}
            </div>
          </div>
        )})}
      </div>
      
      {hasMore && (
        <div className="flex justify-center mb-6">
          <button 
            onClick={loadMore}
            className="bg-white border border-gray-200 text-[#055C33] font-bold py-2.5 px-8 rounded-full text-sm shadow-sm transition hover:bg-gray-50"
          >
            عرض المزيد ({filteredProducts.length - displayedCount})
          </button>
        </div>
      )}
      {!hasMore && filteredProducts.length === 0 && (
         <div className="col-span-2 text-center text-gray-500 py-12 flex flex-col items-center">
           <Heart className={`w-12 h-12 mb-3 ${showFavorites ? 'text-red-200' : 'text-gray-200'}`} />
           <p>{showFavorites ? 'لا توجد منتجات في المفضلة' : 'لا توجد منتجات في هذا القسم'}</p>
         </div>
      )}
    </div>
  );
}
