import { z } from "zod";


export const ValidationEditUser = z.object({
  // user_username: 
  // z.string()
  // .min(3, "Username must be at least 3 characters"),
  user_fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters"),
})