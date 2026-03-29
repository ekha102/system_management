import {z} from "zod";

export const ValidationLogin = z
  .object({
    user_username: z
      .string(),
    user_password: z
      .string(),
  });