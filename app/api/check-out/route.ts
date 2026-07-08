import { ValidationCheckOutEdit } from "@/app/_components/ValidationCheckOutEdit";
import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const validation = ValidationCheckOutEdit.safeParse(body);
  if (!validation.success) {
    return NextResponse.json({ error: "Item not found" }, { status: 404 });
  }

  const { inv_id, invtran_change, invtran_type, invtran_note } =
    validation.data;

  const inventoryIdExisting = await prisma.inventory.findUnique({
    where: { inv_id: parseInt(inv_id) },
  });

  if (!inventoryIdExisting) {
    return NextResponse.json({ error: "Item not found" }, { status: 404 });
  }

  //Create the data in the inventory transaction table and update the inventory quantity in the inventory table:
  try {
    const recordInventory = await prisma.$transaction(async (tx) => {
      await tx.inventoryTransaction.create({
        data: {
          inv_id: parseInt(inv_id),
          invtran_change,
          invtran_type,
          invtran_note,
        },
      });

      await tx.inventory.update({
        where: { inv_id: parseInt(inv_id) },
        data: {
          inv_quantity: inventoryIdExisting.inv_quantity - invtran_change,
        },
      });
    });
    return NextResponse.json(
      { message: "Check-out successful" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to check-out item" },
      { status: 500 },
    );
  }
};
