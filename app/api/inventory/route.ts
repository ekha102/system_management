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
  // console.log("Body: ", body);
  const validation = ValidationInventoryCreateItem.safeParse(body);

  // Handle validation errors
  if (!validation.success)
    return NextResponse.json(validation.error.errors, {status: 400});

  // Use validated data (quantity is coerced to number here)
  const {name, description, quantity} = validation.data;

  // Create new inventory item
  const itemCreated = await prisma.inventory.create({
    data: {
      name,
      description,
      quantity,
    }
  })

  return NextResponse.json(itemCreated, {status: 201});
}