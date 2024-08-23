import type { z } from 'zod';
import type {
  authSchema,
  loginUserSchema,
  registerUserSchema,
} from './auth.schemas';

export type Auth = z.infer<typeof authSchema>;

export type RegisterUser = z.infer<typeof registerUserSchema>;
export type LoginUser = z.infer<typeof loginUserSchema>;
