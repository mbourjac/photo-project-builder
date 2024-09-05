import { z } from 'zod';

export const authSchema = z.object({
  accessToken: z.string(),
  id: z.string(),
});

export const signUpUserSchema = z
  .object({
    email: z
      .string()
      .trim()
      .toLowerCase()
      .min(1, { message: 'Enter an email address' })
      .email('Please provide a valid email address'),
    username: z.string().trim().min(1, { message: 'Enter a first name' }),
    password: z
      .string()
      .trim()
      .min(1, { message: 'Enter a password' })
      .min(8, 'Use 8 characters or more for your password')
      .regex(/[a-z]/, 'Use at least one lowercase letter')
      .regex(/[A-Z]/, 'Use at least one uppercase letter')
      .regex(/\d/, 'Use at least one number')
      .regex(/[@$!%*?&]/, 'Use at least one special character'),
    confirmPassword: z
      .string()
      .min(1, { message: 'Please confirm your password' }),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: 'custom',
        message: 'The passwords do not match',
        path: ['confirmPassword'],
      });
    }
  });

export const logInUserSchema = z.object({
  email: z.string().trim().min(1, { message: 'Enter your email address' }),
  password: z.string().trim().min(1, { message: 'Enter your password' }),
});
