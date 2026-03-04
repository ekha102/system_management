import {z} from "zod";

export const ValidationLogin = z
  .object({
    user_username: z
      .string()
      .regex(/^[a-zA-Z0-9]+$/),

    user_password: z
      .string()
      .regex(/[A-Z]/)
      .regex(/[a-z]/)
      .regex(/[0-9]/)
      .regex(/[!@#$%&]/)

  });