import { ValidationCheckInEdit } from "@/app/_components/ValidationCheckInEdit";
import { prisma } from "@/prisma/client";
import { InventoryAlertLevel } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


export const POST = async (request: NextRequest) => {
  const body = await request.json();
  // console.log("Check-In Data:", body);
  const validation = ValidationCheckInEdit.safeParse(body);
  if (!validation.success) {
    return NextResponse.json({ error: validation.error.errors }, { status: 400 });
  }


  const inventoryIdExist = await prisma.inventory.findUnique({
    where: { inv_id: validation.data.inv_id }
  });

  console.log("Inventory Existing ID: ", inventoryIdExist)
  if (!inventoryIdExist) {
    return NextResponse.json({ error: "Inventory ID does not exist" }, { status: 404 });
  }

  const { inv_id, prod_name, invtran_change, invtran_type, invtran_note } = validation.data;
  const { inv_quantity, inv_restock, inv_trigger, inv_alerted } = inventoryIdExist;

  const inventoryTransaction = await prisma.$transaction(async (tx) => {
    const inventory = await tx.inventory.findUnique({
      where: { inv_id },
    });

    if (!inventory) throw new Error("Inventory not found");

    const newQuantity = inventory.inv_quantity + invtran_change;

    let newAlert: InventoryAlertLevel;

    if (newQuantity < inventory.inv_restock) {
      newAlert = InventoryAlertLevel.Low;
    } else if (newQuantity < inventory.inv_trigger) {
      newAlert = InventoryAlertLevel.Medium;
    } else {
      newAlert = InventoryAlertLevel.High;
    }

    await tx.inventoryTransaction.create({
      data: {
        inv_id,
        invtran_change,
        invtran_type,
        invtran_note,
      },
    });

    await tx.inventory.update({
      where: { inv_id },
      data: {
        inv_quantity: {
          increment: invtran_change, // ✅ atomic
        },
        inv_alerted: newAlert,
      },
    });
  });


  console.log("Created Inventory Transaction:", inventoryTransaction);
  return NextResponse.json(inventoryTransaction, { status: 201 });

}