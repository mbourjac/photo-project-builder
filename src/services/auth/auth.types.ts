import type { z } from 'zod';
import type { authSchema, registerUserSchema } from './auth.schemas';

export type Auth = z.infer<typeof authSchema>;

export type RegisterUser = z.infer<typeof registerUserSchema>;
