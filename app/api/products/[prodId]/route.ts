import { InvalidationCreateProduct } from "@/app/_components/InvalidationCreateProduct";
import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

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
    return NextResponse.json({message: "Product updated successfully!"}, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: "Something went wrong while updating the product in backend." }, { status: 500 });
  }


} 
