import z from "zod";

export const ValidationInventoryCreateItem = z.object({
  inv_name: z.string().min(1, 'Required field.').max(255),
  inv_desc: z.string().min(1, 'Required field.').max(1000),
  inv_quantity:  z.number().min(1, "Quantity must be at least 1").max(100, "Quantity must be less than or equal to 100"),
  checkedBin: z.boolean(),
  bin_id: z.number().int().optional(),
  loc_id: z.number().int().optional(),
});
