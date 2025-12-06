import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request:NextRequest) {
  const inventory = await prisma.inventory.findMany();
  return NextResponse.json(inventory);
}