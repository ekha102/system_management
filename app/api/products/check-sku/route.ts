import { prisma } from "@/prisma/client";
import delay from "delay";
import { NextRequest, NextResponse } from "next/server";
import { ProdSkuLogic } from "../ProdSkuLogic";


export const GET = async (request: NextRequest) => {
  // console.log("Testing request url", request.url); Output: Testing request url http://localhost:3000/api/products/check-sku?sku=1234
  const { searchParams } = new URL(request.url);
  // console.log("Search: ", search); Output: ?sku=1234
  // console.log("Search Params:", searchParams);

  const prodSku = searchParams.get("prodSku");
  // console.log("prodSku", prodSku);

  // Checking the variable has value
  if (!prodSku) {
    return NextResponse.json({ error: "SKU required" }, { status: 400 });
  }

  // await delay(5000);
  const existingSku = await ProdSkuLogic(prodSku);

 
  // console.log("Existing SKU", !!existingSku); Output: the sku is not had in db and convert to true
  return NextResponse.json({
    existingSku: Boolean(!!existingSku),
  });
}
