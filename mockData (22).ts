import { AdminSettings } from './types';

// In a real app, this would be fetched from Convex
export const MOCK_ADMIN_SETTINGS: AdminSettings = {
  storeName: "ماركت المرتضى",
  storeSubtitle: "كل احتياجاتك اليومية بمكان واحد",
  whatsappNumber: "+9647712345678",
  whatsappEnabled: true,
  whatsappButtonText: "تواصل معنا عبر واتساب",
  whatsappDefaultMessage: "مرحباً، أحتاج مساعدة بخصوص طلبي من ماركت المرتضى",
  adminTheme: (localStorage.getItem('adminTheme') as 'light' | 'dark') || 'light'
};
