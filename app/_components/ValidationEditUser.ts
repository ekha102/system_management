import { z } from "zod";

export const ValidationEditUser = z.object({
  user_id: z.number(),
  user_fullName: z.string().min(1, "Full name is required"),
  role_id: z.number().nullable(),

  permissions: z.record(
    z.object({
      view: z.boolean(),
      create: z.boolean(),
      edit: z.boolean(),
      delete: z.boolean(),
    })
  )
});