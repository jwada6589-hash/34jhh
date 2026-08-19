import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Products from './components/Products';
import Features from './components/Features';
import BottomNav from './components/BottomNav';
import CartView from './components/CartView';
import { useAppContext } from '../shared/context/AppContext';

export default function ClientApp() {
  const [currentView, setCurrentView] = useState('home');
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);
  
  const { products: allProducts } = useAppContext();

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]
    );
  };

  const addToCart = (product: any) => {
    setCartItems(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQ = item.quantity + delta;
        return newQ > 0 ? { ...item, quantity: newQ } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  return (
    <div className="max-w-md mx-auto bg-[#F8F9FA] min-h-screen relative pb-24 font-cairo shadow-2xl overflow-hidden flex flex-col">
      {currentView === 'home' && <Header />}
      <main className="px-0 flex-1 overflow-y-auto hide-scrollbar">
         {currentView === 'home' ? (
           <>
             <Hero />
             <div className="px-4">
               <Categories selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
               <Products 
                 selectedCategory={selectedCategory} 
                 onAddToCart={addToCart} 
                 cartItems={cartItems} 
                 updateQuantity={updateQuantity} 
                 favorites={favorites}
                 toggleFavorite={toggleFavorite}
               />
               <Features />
             </div>
           </>
         ) : currentView === 'cart' ? (
           <CartView items={cartItems} updateQuantity={updateQuantity} onViewChange={setCurrentView} />
         ) : (
           <div className="flex flex-col items-center justify-center h-full text-gray-400 py-32">
             <div className="text-4xl mb-4 opacity-50">🚧</div>
             <p className="font-bold">قريباً...</p>
             <p className="text-sm mt-2">هذه الصفحة قيد التطوير</p>
           </div>
         )}
      </main>
      <BottomNav currentView={currentView} onViewChange={setCurrentView} cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} />
    </div>
  )
}
