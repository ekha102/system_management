import z from "zod";


export const ValidationCheckInEdit = z.object({
  inv_id: z.number(),
  prod_name: z.string(),
  invtran_change: z.number(),
  invtran_type: z.enum(["PURCHASE", "ADJUST", "DISCARD"]),
  invtran_note: z.string().optional(),
})