import z from "zod";

export const ValidationInventoryCreateItem = z.object({
  name: z.string().min(1, 'Required field.').max(255),
  description: z.string().min(1, 'Required field.').max(1000),
  quantity:  z.coerce.number().min(1, "Quantity must be at least 1").max(100, "Quantity must be less than or equal to 100"),
});
