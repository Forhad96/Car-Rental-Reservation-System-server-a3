export type TCar = {
  name: string;
  description: string;
  brand: string;
  model: string;
  year: number;
  color: string;
  isElectric: boolean;
  carType: 'sedan' | 'SUV' | 'truck' | 'van' | 'coupe' | 'electric';
  door?: number;
  passengers?: number;
  transmission?: string;
  luggage?: number;
  airCondition?: boolean;
  seats: number;
  mileage?: number;
  status: 'available' | 'unavailable';
  location: string;
  features: string[];
  pricePerHour: number;
  pricePerDay?: number;
  imageUrl?: string[];
  isDeleted?: boolean;
};
export type TReturnCar = {
  bookingId: string;
  endTime: string;
};
