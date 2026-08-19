import { Offer } from './types';

// Helper to easily get dates relative to now
const getRelativeDate = (daysOffset: number) => {
  const d = new Date();
  d.setDate(d.getDate() + daysOffset);
  // Ensure we don't have seconds/milliseconds to make datetime-local inputs happy later
  d.setSeconds(0, 0);
  return d.toISOString();
};

export const MOCK_OFFERS: Offer[] = [
  {
    id: 'off-1',
    productId: 'prod-1', // خبز لبناني (original: 1000)
    offerPrice: 750,
    startDate: getRelativeDate(-1), // Started yesterday
    endDate: getRelativeDate(2),    // Ends in 2 days
    isDisabled: false,
  },
  {
    id: 'off-2',
    productId: 'prod-2', // بيبسي (original: 500)
    offerPrice: 350,
    startDate: getRelativeDate(1), // Starts tomorrow
    endDate: getRelativeDate(3),   // Ends in 3 days
    isDisabled: false,
  },
  {
    id: 'off-3',
    productId: 'prod-1', // Just for testing EXPIRED
    offerPrice: 500,
    startDate: getRelativeDate(-5),
    endDate: getRelativeDate(-2),
    isDisabled: false,
  },
  {
    id: 'off-4',
    productId: 'prod-2', // Just for testing DISABLED
    offerPrice: 250,
    startDate: getRelativeDate(-1),
    endDate: getRelativeDate(5),
    isDisabled: true,
  }
];
