import { z } from 'zod';

const zCarSchema = z.object({
  body: z.object({
    name: z.string().min(1),
    description: z.string().min(1),
    brand: z.string().min(1),
    model: z.string().min(1),
    year: z.number().int(),
    color: z.string().min(1),
    isElectric: z.boolean().default(false),
    carType: z.enum(['sedan', 'SUV', 'truck', 'van', 'coupe', 'electric']),
    door: z.number().int().optional(),
    passengers: z.number().int().optional(),
    transmission: z.string().optional(),
    luggage: z.number().int().optional(),
    airCondition: z.boolean().default(false),
    seats: z.number().int().min(1),
    mileage: z.number().int().optional(),
    status: z.enum(['available', 'unavailable']).default('available'),
    location: z.string().min(1),
    features: z.array(z.string()).min(1),
    pricePerHour: z.number().min(0),
    pricePerDay: z.number().optional(),
    imageUrl: z
      .array(z.string())
      .default([
        'https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg',
      ]),
    isDeleted: z.boolean().default(false),
  }),
});
const zCarUpdateSchema = z.object({
  body: zCarSchema.shape.body.partial(),
});
export { zCarSchema, zCarUpdateSchema };
