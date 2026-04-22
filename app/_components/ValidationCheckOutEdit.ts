import z from "zod";


export const ValidationCheckOutEdit = z.object({
    inv_id: z.number(),
    prod_name: z.string(),
    invtran_change: z.number(),
    invtran_type: z.enum(["CONSUMED", "ADJUST", "DISCARD"]),
    invtran_note: z.string().optional()
})