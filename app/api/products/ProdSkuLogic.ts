import { prisma } from "@/prisma/client";




export const ProdSkuLogic = async (prodSku: string, prodId?: number) => {
  
  if (!prodSku) {
    throw new Error("SKU required");
  }

  const existingSku = await prisma.product.findFirst({
    where: {
      prod_sku: prodSku,
      // If prodId is provided, exclude the current product from the SKU check
      ...(prodId && {
        NOT: {
          prod_id: prodId,
        },
      }),
    },
    select: {
      prod_id: true,
    },
  });

  return Boolean(existingSku);
};
