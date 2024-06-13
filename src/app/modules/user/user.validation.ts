import { z } from 'zod';

const zUserSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  role: z
    .enum(['user', 'admin'])
    .refine((val) => val === 'user' || val === 'admin', {
      message: "Role must be either 'user' or 'admin'",
    }),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
  phone: z.string().min(1, 'Phone number is required'),
  address: z.string().min(1, 'Address is required'),
});

export const UserValidation = {
  zUserSchema,
};
