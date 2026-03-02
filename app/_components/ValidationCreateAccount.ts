import { z } from "zod";

export const ValidationCreateAccount = z
  .object({
    user_username: z
      .string()
      .min(3, "Username must be at least 3 characters")
      .max(15, "Username must be at most 15 characters")
      .regex(/^[a-zA-Z0-9_]+$/, "Only letters, numbers, and underscore allowed"),

    user_fullName: z
      .string()
      .min(2, "Full name must be at least 2 characters")
      .max(50, "Full name must be at most 50 characters"),

    user_password: z
      .string()
      .min(6, "Password must be at least 6 characters"),

    user_confirmPassword: z.string(),
  })
  .refine((data) => data.user_password === data.user_confirmPassword, {
    message: "Passwords do not match",
    path: ["user_confirmPassword"],
  });