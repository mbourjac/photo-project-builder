import type { z } from 'zod';
import type {
  authSchema,
  logInUserSchema as logInUserSchema,
  signUpUserSchema,
} from './auth.schemas';

export type Auth = z.infer<typeof authSchema>;

export type SignUpUser = z.infer<typeof signUpUserSchema>;
export type LogInUser = z.infer<typeof logInUserSchema>;
