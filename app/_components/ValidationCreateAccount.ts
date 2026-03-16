import { z } from "zod";

export const CreateAccountBase = z.object({
  user_username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(10, "Username must be at most 10 characters")
    .regex(/^[a-zA-Z0-9]+$/, "Only letters and numbers"),

  user_fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(15, "Full name must be at most 15 characters"),

  user_password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[!@#$%&]/, "Password must contain at least one special character (!@#$%&)"),

  user_confirmPassword: z.string(),
});

export const ValidationCreateAccount = CreateAccountBase.refine(
  (data) => data.user_password === data.user_confirmPassword,
  {
    message: "Passwords do not match",
    path: ["user_confirmPassword"],
  }
);