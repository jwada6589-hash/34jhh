import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { allProducts as initialProducts, categories as initialCategories } from '../data';

export interface UserProfile {
  fullName: string;
  phone: string;
  address: string;
  landmark: string;
  notes: string;
}

export interface WalletTransaction {
  id: string;
  type: 'EARN' | 'REDEEM';
  amount: number;
  orderId?: string;
  description: string;
  createdAt: string;
}

export interface Wallet {
  balance: number;
  totalEarned: number;
}

export interface Gift {
  id: string;
  name: string;
  description: string;
  image: string;
  requiredBalance: number;
  stock: number;
  isActive: boolean;
}

export interface GiftRedemption {
  id: string;
  giftId: string;
  giftName: string;
  pointsUsed: number;
  status: 'PENDING' | 'APPROVED' | 'RECEIVED' | 'CANCELLED';
  createdAt: string;
}

export type AuthState = 'guest' | 'authenticated' | 'logged_out';

interface AppContextType {
  products: any[];
  categories: any[];
  addProduct: (product: any) => void;
  updateProduct: (product: any) => void;
  deleteProduct: (id: number) => void;
  userProfile: UserProfile;
  updateUserProfile: (profile: UserProfile) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  orders: any[];
  wallet: Wallet;
  walletTransactions: WalletTransaction[];
  gifts: Gift[];
  giftRedemptions: GiftRedemption[];
  redeemGift: (giftId: string) => { success: boolean; message?: string };
  authState: AuthState;
  setAuthState: (state: AuthState) => void;
  showAuthModal: boolean;
  setShowAuthModal: (show: boolean) => void;
  requireAuth: (action: () => void) => void;
  deliveryFee: number;
  placeOrder: (order: any) => void;
  removeOrder: (orderId: string) => void;
}

const initialMockOrders = [
  {
    id: 'ORD-1001',
    date: '2026-08-19 14:30',
    items: [
      { name: 'طماطم طازجة', quantity: 2, price: 1500, size: '2 كيلو' },
      { name: 'موز درجة أولى', quantity: 1, price: 2000, size: '1 كيلو' }
    ],
    deliveryFee: 3000,
    status: 'DELIVERED',
    address: 'بغداد، الكرادة، شارع 62',
    cashbackProcessed: false
  },
  {
    id: 'ORD-1002',
    date: '2026-08-19 16:45',
    items: [
      { name: 'خبز عراقي حار', quantity: 3, price: 1000, size: '6 قطع' }
    ],
    deliveryFee: 3000,
    status: 'PREPARING',
    address: 'بغداد، المنصور، حي دراغ',
    cashbackProcessed: false
  },
  {
    id: 'ORD-1003',
    date: '2026-08-18 09:15',
    items: [
      { name: 'طماطم طازجة', quantity: 2, price: 1500, size: '2 كيلو' }
    ],
    deliveryFee: 3000,
    status: 'REJECTED',
    address: 'بغداد، زيونة، تقاطع ميسلون',
    cashbackProcessed: false
  }
];

const initialMockGifts: Gift[] = [
  {
    id: 'gift-1',
    name: 'علبة عصير طازج',
    description: 'عصير برتقال طبيعي 100% حجم 1 لتر',
    image: 'https://cdn-icons-png.flaticon.com/512/2442/2442093.png',
    requiredBalance: 2000,
    stock: 50,
    isActive: true
  },
  {
    id: 'gift-2',
    name: 'سلة مواد غذائية',
    description: 'سلة متكاملة تحتوي على الأساسيات (زيت، سكر، رز، معجون)',
    image: 'https://cdn-icons-png.flaticon.com/512/3082/3082011.png',
    requiredBalance: 10000,
    stock: 10,
    isActive: true
  },
  {
    id: 'gift-3',
    name: 'رصيد اتصال',
    description: 'بطاقة تعبئة رصيد بقيمة 5000 دينار',
    image: 'https://cdn-icons-png.flaticon.com/512/179/179457.png',
    requiredBalance: 5000,
    stock: 0,
    isActive: true
  }
];

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState(initialProducts);
  const [categories, setCategories] = useState(initialCategories);
  
  const [userProfile, setUserProfile] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('userProfile');
    return saved ? JSON.parse(saved) : { fullName: '', phone: '', address: '', landmark: '', notes: '' };
  });

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('appTheme') as 'light' | 'dark') || 'light';
  });

  const [orders, setOrders] = useState<any[]>(() => {
    const saved = localStorage.getItem('mockOrders');
    return saved ? JSON.parse(saved) : initialMockOrders;
  });

  const [wallet, setWallet] = useState<Wallet>(() => {
    const saved = localStorage.getItem('wallet');
    return saved ? JSON.parse(saved) : { balance: 0, totalEarned: 0 };
  });

  const [walletTransactions, setWalletTransactions] = useState<WalletTransaction[]>(() => {
    const saved = localStorage.getItem('walletTransactions');
    return saved ? JSON.parse(saved) : [];
  });

  const [gifts, setGifts] = useState<Gift[]>(() => {
    const saved = localStorage.getItem('gifts');
    return saved ? JSON.parse(saved) : initialMockGifts;
  });

  const [giftRedemptions, setGiftRedemptions] = useState<GiftRedemption[]>(() => {
    const saved = localStorage.getItem('giftRedemptions');
    return saved ? JSON.parse(saved) : [];
  });

  const [authState, setAuthState] = useState<AuthState>(() => {
    return (localStorage.getItem('authState') as AuthState) || 'logged_out';
  });
  
  const [showAuthModal, setShowAuthModal] = useState(false);

  // Delivery Fee is a global constant defined here for now.
  // In the future, this will be fetched from Convex and managed by admin.
  const deliveryFee = 3000;

  const requireAuth = (action: () => void) => {
    if (authState === 'authenticated') {
      action();
    } else {
      setShowAuthModal(true);
    }
  };

  useEffect(() => {
    localStorage.setItem('authState', authState);
  }, [authState]);

  // Save changes to local storage
  useEffect(() => {
    localStorage.setItem('mockOrders', JSON.stringify(orders));
  }, [orders]);
  
  useEffect(() => {
    localStorage.setItem('wallet', JSON.stringify(wallet));
  }, [wallet]);

  useEffect(() => {
    localStorage.setItem('walletTransactions', JSON.stringify(walletTransactions));
  }, [walletTransactions]);

  useEffect(() => {
    localStorage.setItem('gifts', JSON.stringify(gifts));
  }, [gifts]);

  useEffect(() => {
    localStorage.setItem('giftRedemptions', JSON.stringify(giftRedemptions));
  }, [giftRedemptions]);

  // Process Cashback for delivered orders that haven't been processed yet
  useEffect(() => {
    let hasChanges = false;
    let newBalance = wallet.balance;
    let newTotalEarned = wallet.totalEarned;
    const newTransactions = [...walletTransactions];
    
    const updatedOrders = orders.map(order => {
      if (order.status === 'DELIVERED' && !order.cashbackProcessed) {
        hasChanges = true;
        // Calculate total order value
        const orderTotal = order.items.reduce((sum: number, item: any) => sum + (item.price * item.quantity), 0) + order.deliveryFee;
        
        // Calculate 1% cashback
        const cashbackAmount = Math.floor(orderTotal * 0.01);
        
        if (cashbackAmount > 0) {
          newBalance += cashbackAmount;
          newTotalEarned += cashbackAmount;
          
          newTransactions.unshift({
            id: Date.now().toString() + Math.random().toString(),
            type: 'EARN',
            amount: cashbackAmount,
            orderId: order.id,
            description: `استرجاع نقدي 1% من الطلب #${order.id}`,
            createdAt: new Date().toISOString()
          });
        }
        
        return { ...order, cashbackProcessed: true };
      }
      return order;
    });

    if (hasChanges) {
      setOrders(updatedOrders);
      setWallet({ balance: newBalance, totalEarned: newTotalEarned });
      setWalletTransactions(newTransactions);
    }
  }, [orders, wallet, walletTransactions]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('appTheme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const updateUserProfile = (profile: UserProfile) => {
    setUserProfile(profile);
    localStorage.setItem('userProfile', JSON.stringify(profile));
  };

  const redeemGift = (giftId: string) => {
    const gift = gifts.find(g => g.id === giftId);
    if (!gift || !gift.isActive) return { success: false, message: 'الهدية غير متوفرة حالياً.' };
    if (gift.stock <= 0) return { success: false, message: 'الهدية نفدت من المخزون.' };
    if (wallet.balance < gift.requiredBalance) return { success: false, message: 'رصيدك غير كافٍ للحصول على هذه الهدية.' };

    const newBalance = wallet.balance - gift.requiredBalance;
    
    const newTx: WalletTransaction = {
      id: Date.now().toString() + Math.random().toString(),
      type: 'REDEEM',
      amount: gift.requiredBalance,
      description: `استبدال هدية: ${gift.name}`,
      createdAt: new Date().toISOString()
    };

    const newRedemption: GiftRedemption = {
      id: 'redemption-' + Date.now(),
      giftId: gift.id,
      giftName: gift.name,
      pointsUsed: gift.requiredBalance,
      status: 'PENDING',
      createdAt: new Date().toISOString()
    };

    setWallet(prev => ({ ...prev, balance: newBalance }));
    setWalletTransactions(prev => [newTx, ...prev]);
    setGiftRedemptions(prev => [newRedemption, ...prev]);
    setGifts(prev => prev.map(g => g.id === giftId ? { ...g, stock: g.stock - 1 } : g));

    return { success: true };
  };

  const addProduct = (product: any) => {
    setProducts(prev => [{ ...product, id: Date.now() }, ...prev]);
  };

  const updateProduct = (updatedProduct: any) => {
    setProducts(prev => prev.map(p => p.id === updatedProduct.id ? updatedProduct : p));
  };

  const deleteProduct = (id: number) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const placeOrder = (order: any) => {
    setOrders(prev => [order, ...prev]);
  };

  const removeOrder = (orderId: string) => {
    setOrders(prev => prev.filter(o => o.id !== orderId));
  };

  return (
    <AppContext.Provider value={{ 
      products, categories, addProduct, updateProduct, deleteProduct,
      userProfile, updateUserProfile, theme, toggleTheme,
      orders, wallet, walletTransactions,
      gifts, giftRedemptions, redeemGift,
      authState, setAuthState,
      showAuthModal, setShowAuthModal, requireAuth,
      deliveryFee, placeOrder, removeOrder
    }}>
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
