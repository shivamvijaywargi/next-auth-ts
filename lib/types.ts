import { z } from "zod";

import { USER_ROLES } from "@/config/USER_ROLES";

export const registerFormSchema = z
  .object({
    firstName: z
      .string()
      .min(3, {
        message: "First Name must be at least 3 characters.",
      })
      .max(20),
    lastName: z
      .string()
      .min(3, {
        message: "Last Name must be at least 3 characters.",
      })
      .max(20),
    email: z.string().email().trim().min(2).max(50),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    confirmPassword: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type RegisterFormValues = z.infer<typeof registerFormSchema>;

export const loginFormSchema = z.object({
  email: z.string().email().trim().min(2).max(50),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export type LoginFormValues = z.infer<typeof loginFormSchema>;

export interface IUserSchema {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: USER_ROLES.ADMIN | USER_ROLES.USER;
  isVerified: boolean;
  isActive: boolean;
}
