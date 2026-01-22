import { ValidationInventoryCreateItem } from "@/app/_components/invalidationInventoryCreate";
import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import delay from "delay";


export async function GET(request:NextRequest) {
  const inventory = await prisma.inventory.findMany();
  return NextResponse.json(inventory, {status: 200});
}

export async function POST(request:NextRequest) {
  // await delay(5000);
  const body = await request.json();
  console.log("Body with bin id: ", body);
  const validation = ValidationInventoryCreateItem.safeParse(body);

  // Handle validation errors
  if (!validation.success)
    return NextResponse.json(validation.error.errors, {status: 400});

  // Use validated data (quantity is coerced to number here)
  const {inv_name, inv_desc, inv_quantity, checkedBin, bin_id, loc_id} = validation.data;
  
  const finalBinId = checkedBin ? bin_id : null;
  const finalLocId = checkedBin ? null : loc_id;

  console.log(finalBinId, finalLocId);
  const itemCreated = await prisma.inventory.create({
    data: {
      inv_name,
      inv_desc,
      inv_quantity,
      checkedBin,
      bin_id: finalBinId,
      loc_id: finalLocId
    }
  })

  return NextResponse.json(itemCreated, {status: 201});
}