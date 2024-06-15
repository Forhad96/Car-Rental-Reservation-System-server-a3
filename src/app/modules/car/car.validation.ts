import { z } from 'zod';

const zCarSchema = z.object({
  name: z.string(),
  description: z.string(),
  color: z.string(),
  isElectric: z.boolean(),
  status: z.enum(['available', 'unavailable']),
  features: z.array(z.string()),
  pricePerHour: z.number().nonnegative(),
  isDeleted: z.boolean(),
});


export {zCarSchema}
