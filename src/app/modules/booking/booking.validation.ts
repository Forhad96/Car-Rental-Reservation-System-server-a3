import { z } from 'zod';
const timeStringSchema = z.string().refine(
  (time) => {
    const regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/; // 00-09 10-19 20-23
    return regex.test(time);
  },
  {
    message: 'Invalid time format , expected "HH:MM" in 24 hours format',
  },
);
const zBookingSchema = z.object({
  body: z.object({
    date: z.string().min(1, 'Date is required'),
    user: z.string().min(1, 'User ID is required').optional(),
    car: z.string().min(1, 'Car ID is required'),
    startTime: z
      .string(),
      // .regex(
      //   /^([01]\d|2[0-3]):([0-5]\d)$/,
      //   'Start time must be in 24-hour format (HH:mm)',
      // ),
    endTime: z
      .string()
      .optional(),
    totalCost: z.number().nonnegative().default(0),
  }),
});

export {zBookingSchema} ;
