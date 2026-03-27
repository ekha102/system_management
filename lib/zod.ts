import { z } from "zod";

export const signInSchema = z.object({
  user_username: z
    .string()
    .trim()
    .min(1, "Username is required")
    .transform((username) => username.toLowerCase()),
  password: z
    .string()
    .min(1, "Password is required"),
});

export type SignInInput = z.infer<typeof signInSchema>;
