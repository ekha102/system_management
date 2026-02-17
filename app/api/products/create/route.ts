import { InvalidationCreateProduct } from "@/app/_components/InvalidationCreateProduct";
import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";



export const POST = async (request: NextRequest) => {
  const body = await request.json();
  // console.log("Product body",body);
  const validation = InvalidationCreateProduct.safeParse(body);
  // console.log("Validation", validation);
  if (validation.error)
    return NextResponse.json({ message: "Validation failed", errors: validation.error.format() }, { status: 400 });

  const {prod_name, prod_sku, prod_desc} = validation.data;
  const createProduct = await prisma.product.create({
    data: {
      prod_name,
      prod_sku,
      prod_desc,
    }
  });

  return NextResponse.json(createProduct, {status: 201})

}