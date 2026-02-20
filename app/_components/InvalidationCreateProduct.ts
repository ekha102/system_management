import z from "zod";

export const InvalidationCreateProduct = z.object({
  prod_name: z.string().min(2, "Product name must more than 2 characters").max(50, "Product name must less than 20 characters"),
  prod_sku: z.string().min(2, "SKU must more than 2 characters or number"),
  prod_desc: z.string().max(100, "Description must less than 100 characters")
});