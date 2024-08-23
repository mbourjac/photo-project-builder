import type { z } from 'zod';
import type {
  authSchema,
  loginUserSchema,
  signUpUserSchema,
} from './auth.schemas';

export type Auth = z.infer<typeof authSchema>;

export type SignUpUser = z.infer<typeof signUpUserSchema>;
export type LoginUser = z.infer<typeof loginUserSchema>;
