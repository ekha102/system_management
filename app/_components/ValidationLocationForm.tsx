import { z } from "zod";


export const ValidationLocationForm = z.object({
  loc_name: z.string().trim().min(1, "Location name is required"),
  loc_desc: z.string().optional(),
})