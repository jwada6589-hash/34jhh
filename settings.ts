export interface GeneralSettings {
  storeName: string;
  storeSubtitle: string;
  whatsappNumber: string;
  whatsappEnabled: boolean;
  whatsappButtonText: string;
  whatsappDefaultMessage: string;
}

// In a real app, this would be fetched from Convex or global state
export const MOCK_USER_SETTINGS: GeneralSettings = {
  storeName: "ماركت المرتضى",
  storeSubtitle: "كل احتياجاتك اليومية بمكان واحد",
  whatsappNumber: "+9647712345678",
  whatsappEnabled: true,
  whatsappButtonText: "تواصل معنا عبر واتساب",
  whatsappDefaultMessage: "مرحباً، أحتاج مساعدة بخصوص طلبي من ماركت المرتضى",
};
