import { ValidationInventoryCreateItem } from "@/app/_components/ValidationInventoryCreate";
import { InventoryAlertLevel } from "@/app/generated/prisma";
import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";



export async function GET(request: NextRequest) {
  const inventory = await prisma.inventory.findMany();
  return NextResponse.json(inventory, { status: 200 });
}

export async function POST(request: NextRequest) {
  // await delay(5000);
  const body = await request.json();
  // console.log("Body with bin id: ", body);
  const validation = ValidationInventoryCreateItem.safeParse(body);

  // Handle validation errors
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  // Use validated data (quantity is coerced to number here)
  const { prod_id, inv_quantity, inv_trigger, inv_restock, store_id, checkedBin, bin_id, loc_id } = validation.data;

  const finalBinId = checkedBin ? bin_id : null;
  const finalLocId = checkedBin ? null : loc_id;

  // // Determine alert level based on quantity, trigger, and restock
  // let alert_input: InventoryAlertLevel = InventoryAlertLevel.Initial;
  // if (inv_quantity > inv_trigger) {
  //   alert_input = InventoryAlertLevel.High;
  // } else if (inv_quantity > inv_trigger || inv_quantity > inv_restock) {
  //   alert_input = InventoryAlertLevel.Medium;
  // } else {
  //   alert_input = InventoryAlertLevel.Low;
  // }

  
  try {
    const itemCreated = await prisma.inventory.create({
      data: {
        prod_id,
        inv_quantity,
        inv_trigger,
        inv_restock,
        inv_alerted: InventoryAlertLevel.Initial, // Set to Initial by default
        store_id,
        checkedBin,
        bin_id: finalBinId,
        loc_id: finalLocId
      }
    })

    return NextResponse.json(itemCreated, { status: 201 });

  } catch (error) {
    return NextResponse.json({ error: "Failed to create inventory item" }, { status: 500 });
  }


}