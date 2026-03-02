import { ValidationCreateProduct } from "@/app/_components/ValidationCreateProduct";
import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { ProdSkuLogic } from "../ProdSkuLogic";



export const POST = async (request: NextRequest) => {
  const body = await request.json();
  // console.log("Product body",body);

  

  const validation = ValidationCreateProduct.safeParse(body);
  // console.log("Validation", validation);
  if (validation.error)
    return NextResponse.json({ message: "Validation failed", errors: validation.error.format() }, { status: 400 });


  const {prod_name, prod_sku, prod_desc} = validation.data;

  const skuExists = await ProdSkuLogic(prod_sku);

  if (skuExists) {
    return NextResponse.json(
      { error: "SKU already exists ❌" },
      { status: 409 }
    );
  }
  
  const createProduct = await prisma.product.create({
    data: {
      prod_name,
      prod_sku,
      prod_desc,
    }
  });

  return NextResponse.json(createProduct, {status: 201})

}