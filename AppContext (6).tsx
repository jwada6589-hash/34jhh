import React, { createContext, useContext, useState, ReactNode } from 'react';
import { allProducts as initialProducts, categories as initialCategories } from '../data';

interface AppContextType {
  products: any[];
  categories: any[];
  addProduct: (product: any) => void;
  updateProduct: (product: any) => void;
  deleteProduct: (id: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState(initialProducts);
  const [categories, setCategories] = useState(initialCategories);

  const addProduct = (product: any) => {
    setProducts(prev => [{ ...product, id: Date.now() }, ...prev]);
  };

  const updateProduct = (updatedProduct: any) => {
    setProducts(prev => prev.map(p => p.id === updatedProduct.id ? updatedProduct : p));
  };

  const deleteProduct = (id: number) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  return (
    <AppContext.Provider value={{ products, categories, addProduct, updateProduct, deleteProduct }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
