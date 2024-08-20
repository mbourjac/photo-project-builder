import type { z } from 'zod';
import type { registerUserSchema } from './auth.schemas';

export type RegisterUser = z.infer<typeof registerUserSchema>;
