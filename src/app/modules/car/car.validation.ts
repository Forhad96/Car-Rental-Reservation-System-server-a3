import { z } from 'zod';

const zCarSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required'),
    description: z.string().min(1, 'Description is required'),
    brand: z.string().min(1, 'Brand is required'),
    model: z.string().min(1, 'Model is required'),
    year: z
      .number()
      .int()
      .min(1886, 'Year must be valid')
      .max(new Date().getFullYear(), 'Year cannot be in the future'), // Year validation
    color: z.string().min(1, 'Color is required'),
    isElectric: z.boolean(),
    carType: z.enum(['sedan', 'SUV', 'truck', 'van', 'coupe', 'electric']), // Car type enum
    seats: z.number().int().positive('Seats must be a positive number'),
    mileage: z.number().positive('Mileage must be a positive number'),
    status: z.enum(['available', 'unavailable']), // Status enum
    location: z.string().min(1, 'Location is required'),
    features: z.array(z.string()).min(1, 'At least one feature is required'), // Features must have at least one element
    pricePerHour: z
      .number()
      .positive('Price per hour must be a positive number'),
    pricePerDay: z.number().positive().optional(), // Optional pricePerDay
    imageUrl: z
      .array(z.string().url())
      .min(1, 'At least one image URL is required')
      .optional(),
    isDeleted: z.boolean().default(false), // Default to false
  }),
});
const zCarUpdateSchema = z.object({
  body: zCarSchema.shape.body.partial(),
});
export { zCarSchema, zCarUpdateSchema };
