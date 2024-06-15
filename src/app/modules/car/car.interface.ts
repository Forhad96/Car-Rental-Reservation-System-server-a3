export type TCar = {
  name: string;
  description: string;
  color: string;
  isElectric: boolean;
  status: 'available' | 'unavailable'; // Assuming status can be either 'available' or 'unavailable'
  features: string[];
  pricePerHour: number;
  isDeleted: boolean;
};
