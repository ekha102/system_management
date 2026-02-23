import { InvalidationCreateProduct } from "@/app/_components/InvalidationCreateProduct";
import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { ProdSkuLogic } from "../ProdSkuLogic";

interface props {
  params: {
    prodId: string
  };
}
export const PUT = async (request: NextRequest, { params }: props) => {
  // Get prod id from params and body from request
  // Exist the prodId in DB or return 404
  // Validate body with InvalidationCreateProduct
  // If valid → update the product in DB and return success response with status 200
  // else → return validation error response status 400 with error details

  const { prodId } = params;

  const body = await request.json();

  // Check if product with prodId exists
  const checkProdIdExist = await prisma.product.findUnique({
    where: { prod_id: parseInt(prodId) },
  });

  // If product not found, return 404
  if (!checkProdIdExist) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }


  // Validate the request body using InvalidationCreateProduct
  const validation = InvalidationCreateProduct.safeParse(body);

  // If validation fails, return 400 with error details
  if (!validation.success)
    return NextResponse.json({ error: "Invalid product data", details: validation.error.errors }, { status: 400 })

  // destructure validated data
  const { prod_name, prod_sku, prod_desc } = validation.data;

  // Check if the new SKU already exists for another product
  const skuExists = await ProdSkuLogic(prod_sku, parseInt(prodId)); // Pass prodId to exclude current product from SKU check

  if (skuExists) {
    console.log("Yes same sku");
    return NextResponse.json(
      { error: "SKU already exists ❌" },
      { status: 409 }
    );
  }

  // try catch block to handle any unexpected errors during database update
  try {
    // Update the product in the database
    await prisma.product.update({
      where: { prod_id: parseInt(prodId) },
      data: {
        prod_name,
        prod_sku,
        prod_desc,
      },
    });
    // Return success response with status 200
    return NextResponse.json({ message: "Product updated successfully!" }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: "Something went wrong while updating the product in backend." }, { status: 500 });
  }

}



// DELETE request handler to delete a product by prodId
// Steps:
// 1. Get prodId from params
// 2. Validate prodId, if not valid return 400
// 3. Check if product with prodId exists in DB, if not return 404
// 4. If exists, delete the product from DB and return success response with status 200
export const DELETE = async (request: NextRequest, { params }: props) => {

  const { prodId } = params;

  // validate prodId is a number, if not valid return 400
  // if (isNaN(parseInt(prodId))) {
  //   return NextResponse.json({ error: "Invalid product ID" }, { status: 400 });
  // }

  // Check if product with prodId exists in DB
  const checkingProdIdExist = await prisma.product.findUnique({
    where: { prod_id: parseInt(prodId) }
  })

  // console.log("Checking Prod Id Exist", checkingProdIdExist)
  // If product not found, return 404
  if (!checkingProdIdExist) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  try {
    // If product exists, delete it from DB
    await prisma.product.delete({
      where: { prod_id: parseInt(prodId) }
    });
    // Return success response with status 200
    return NextResponse.json({ message: "Product deleted successfully!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete product" }, { status: 500 });
  }
  
}