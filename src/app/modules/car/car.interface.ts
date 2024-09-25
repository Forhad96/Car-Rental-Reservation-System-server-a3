export type TCar = {
  name: string;
  description: string;
  brand: string;
  model: string;
  year: number;
  color: string;
  isElectric: boolean;
  carType: 'sedan' | 'SUV' | 'truck' | 'van' | 'coupe' | 'electric'; // Enum for car type
  seats: number;
  mileage: number;
  status: 'available' | 'unavailable'; // Enum for car status
  location: string;
  features: string[];
  pricePerHour: number;
  pricePerDay?: number; // Optional field
  imageUrl?: string[]; // Optional field
  isDeleted: boolean;
};
export type TReturnCar = {
  bookingId: string;
  endTime: string;
};
