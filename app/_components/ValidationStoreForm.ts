import { z } from "zod";


export const ValidationStoreForm = z.object({
  store_name: z.string().trim().min(1, "Store name is required"),
  store_desc: z.string().optional(),
})