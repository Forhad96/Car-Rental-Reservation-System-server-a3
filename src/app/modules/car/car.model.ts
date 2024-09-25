import mongoose, { Schema } from 'mongoose';
import { TCar } from './car.interface';

// Create the Car schema
const carSchema = new Schema<TCar>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  brand: { type: String, required: true }, // New field: Brand of the car
  model: { type: String, required: true }, // New field: Car model
  year: { type: Number, required: true }, // New field: Year of manufacture
  color: { type: String, required: true },
  isElectric: { type: Boolean, required: true },
  carType: {
    type: String,
    enum: ['sedan', 'SUV', 'truck', 'van', 'coupe', 'electric'], // New field: Car type
    required: true,
  },
  seats: { type: Number, required: true }, // New field: Number of seats
  mileage: { type: Number, required: true }, // New field: Mileage of the car
  status: {
    type: String,
    enum: ['available', 'unavailable'],
    default: 'available',
  },
  location: { type: String, required: true }, // New field: Location of the car
  features: { type: [String], required: true },
  pricePerHour: { type: Number, required: true },
  pricePerDay: { type: Number, required: false }, // New field: Price per day
  imageUrl: { type: [String], required: false }, // New field: URL for car image
  isDeleted: { type: Boolean, default: false },
});

// Create and export the Car model
const CarModel = mongoose.model<TCar>('Car', carSchema);

export default CarModel;
