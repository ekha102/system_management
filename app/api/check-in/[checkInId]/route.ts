import { ValidationCheckInEdit } from "@/app/_components/ValidationCheckInEdit";
import { prisma } from "@/prisma/client";
import { InventoryAlertLevel } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();

    const validation = ValidationCheckInEdit.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { success: false, error: validation.error.errors },
        { status: 400 }
      );
    }

    const { inv_id, invtran_change, invtran_type, invtran_note } =
      validation.data;

    const inventoryIdExist = await prisma.inventory.findUnique({
      where: { inv_id },
    });

    if (!inventoryIdExist) {
      return NextResponse.json(
        { success: false, message: "Inventory ID does not exist" },
        { status: 404 }
      );
    }

    const createdTransaction = await prisma.$transaction(async (tx) => {
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

      // RETURN THIS
      const transaction = await tx.inventoryTransaction.create({
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
            increment: invtran_change,
          },
          inv_alerted: newAlert,
        },
      });

      return transaction;
    });

    return NextResponse.json(
      {
        success: true,
        data: createdTransaction,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /check-in error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Internal Server Error",
      },
      { status: 500 }
    );
  }
};