import z from "zod";

export const ValidationInventoryCreateItem = z.object({
  name: z.string().min(1, 'Required field.').max(255),
  description: z.string().min(1, 'Required field.').max(1000),
  quantity:  z.number().min(1, "Quantity must be greater than 0").int("Quantity must be an integer"),
});
