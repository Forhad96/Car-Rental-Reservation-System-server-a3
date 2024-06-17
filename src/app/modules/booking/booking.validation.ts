import { z } from 'zod';

const zBookingSchema = z.object({
  body: z.object({
    date: z.string().min(1, 'Date is required'),
    user: z.string().min(1, 'User ID is required').optional(),
    car: z.string().min(1, 'Car ID is required'),
    startTime: z
      .string()
      .regex(
        /^([01]\d|2[0-3]):([0-5]\d)$/,
        'Start time must be in 24-hour format (HH:mm)',
      ),
    endTime: z
      .string()
      .regex(
        /^([01]\d|2[0-3]):([0-5]\d)$/,
        'End time must be in 24-hour format (HH:mm)',
      )
      .optional(),
    totalCost: z.number().nonnegative().default(0),
  }),
});

export {zBookingSchema} ;
