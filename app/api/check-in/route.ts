import { InvTranType } from "@/app/generated/prisma/wasm";
import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";






export const PUT = async (request: NextRequest) => {
  const body = await request.json();
  const { invtran_change, inv_id } = body;

  const existingItemId = await prisma.inventory.findUnique({
    where: {
      inv_id,
    },
  });

  // console.log("Exist ID", existingItemId)
  if (!existingItemId)
    return NextResponse.json({ error: "Item not found" }, { status: 404 });

  try {
    await prisma.$transaction(async (tx) => {
      await tx.inventoryTransaction.create({
        data: {
          inv_id,
          invtran_change: invtran_change,
          invtran_type: InvTranType.INITIAL,
        }
      })

      const updatedInventory = await tx.inventory.update({
        where: {
          inv_id,
        },
        data: {
          inv_quantity: existingItemId.inv_quantity + invtran_change,
        }
      })
      return updatedInventory;
    })
    return NextResponse.json({ message: "Check-in successful"}, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to check-in item" }, { status: 500 });
  }


}