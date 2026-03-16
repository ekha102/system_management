import { z } from "zod";
import { CreateAccountBase } from "./ValidationCreateAccount";

export const ValidationEditUser = z.object({
  user_id: z.number(),

  user_fullName: CreateAccountBase.shape.user_fullName,

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