import { z } from 'zod';

const zCarSchema = z.object({
  body: z.object({
    name: z.string(),
    description: z.string(),
    color: z.string(),
    isElectric: z.boolean(),
    status: z.enum(['available', 'unavailable']).default('available'),
    features: z.array(z.string()),
    pricePerHour: z.number().nonnegative(),
    isDeleted: z.boolean().default(false),
  }),
});
const zCarUpdateSchema = z.object({
  body: zCarSchema.shape.body.partial(),
});
export { zCarSchema,zCarUpdateSchema };
