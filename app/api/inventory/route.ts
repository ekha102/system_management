import { ValidationInventoryCreateItem } from "@/app/_components/invalidationInventoryCreate";
import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request:NextRequest) {
  const inventory = await prisma.inventory.findMany();
  return NextResponse.json(inventory, {status: 200});
}

export async function POST(request:NextRequest) {
  const body = await request.json();
  const validation = ValidationInventoryCreateItem.safeParse(body);

  // Handle validation errors
  if (!validation.success)
    return NextResponse.json(validation.error.errors, {status: 400});

  // Use validated data (quantity is coerced to number here)
  const {name, description, quantity} = validation.data;
  
  // Create new inventory item
  const itemCreate = await prisma.inventory.create({
    data: {
      name,
      description,
      quantity,
    }
  })

  return NextResponse.json(itemCreate, {status: 201});
}