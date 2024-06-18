import { z } from 'zod';
import { zSignUpSchema } from '../auth/auth.validation';

// User registration schema
const zUserUpdateSchema = z.object({
  body: zSignUpSchema.shape.body.partial(),
});

export { zUserUpdateSchema };
