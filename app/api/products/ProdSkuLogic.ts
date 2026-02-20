import { prisma } from "@/prisma/client";

export const ProdSkuLogic = async (prodSku: string) => {
  if (!prodSku) {
    throw new Error("SKU required");
  }

  const existingSku = await prisma.product.findUnique({
    where: { prod_sku: prodSku },
    select: { prod_sku: true },
  });

  return Boolean(existingSku);
};
