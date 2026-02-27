import { z } from "zod";


export const InvalidationCheckIn = z.object({
  inv_id: z.number(),
  // invtran_type: z.enum(["INITIAL","PURCHASE", "CONSUMED", "ADJUSTMENT", "DISCARD"]),
  // invtran_change: z.number(),
  invtran_note: z.string().optional(),
  setCheckInAdjustment: z.number().optional(),
})
