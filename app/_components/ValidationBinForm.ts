import { z } from "zod";


export const ValidationBinFrom = z.object({
  bin_desc: z.string().trim().optional()
})