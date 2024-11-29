import mongoose, { Schema } from 'mongoose';
import { TCar } from './car.interface';

// Create the Car schema without validation
const carSchema = new Schema<TCar>({
  name: { type: String, required: true, index: true },
  description: { type: String, required: true },
  brand: { type: String, required: true, index: true }, // Indexed for faster queries
  model: { type: String, required: true, index: true }, // Indexed for faster queries
  year: { type: Number, required: true },
  color: { type: String, required: true },
  isElectric: { type: Boolean, required: true, default: false },
  carType: {
    type: String,
    enum: ['sedan', 'SUV', 'truck', 'van', 'coupe', 'electric'],
    required: true,
  },
  door: { type: Number },
  passengers: { type: Number }, // Changed to camelCase
  transmission: { type: String }, // Changed to camelCase
  luggage: { type: Number }, // Changed to camelCase
  airCondition: { type: Boolean, default: false }, // Changed to camelCase
  seats: { type: Number, required: true },
  mileage: { type: Number },
  status: {
    type: String,
    enum: ['available', 'unavailable'],
    default: 'available',
    index: true, // Indexed for faster queries
  },
  location: { type: String, required: true, index: true }, // Indexed for faster queries
  features: { type: [String], required: true },
  pricePerHour: { type: Number, required: true },
  pricePerDay: { type: Number },
  imageUrl: {
    type: [String],
    default: [
      'https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg',
    ],
  },
  isDeleted: { type: Boolean, default: false },
});

// Create and export the Car model
const CarModel = mongoose.model<TCar>('Car', carSchema);

export default CarModel;
