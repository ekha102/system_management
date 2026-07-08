import { z } from "zod";

export const ValidationInventoryCreateItem = z.object({
  prod_id: z.number().min(1, "Product must be at least 1"),
  inv_quantity: z.number().min(0, "Quantity must be at least 0"),
  inv_trigger: z.number().min(1, "Trigger must be at least 1"),
  inv_restock: z.number().min(1, "Restock must be at least 1"),
  store_id: z.number().nullable().optional(),
  checkedBin: z.boolean().default(false),
  bin_id: z.number().nullable().optional(),
  loc_id: z.number().nullable().optional(),
});
