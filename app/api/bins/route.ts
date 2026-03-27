import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
  const body = await request.json();
  const { bin_desc } = body;

  const createdBinId = await prisma.bin.create({
    data: {
      bin_name: "Temp Bin", // required field (must exist)
    }
  });

  const {bin_id} = createdBinId;
  const updatedBin = await prisma.bin.update({
    where: {bin_id},
    data: {
      bin_name: `Bin_${bin_id}`,
      bin_desc,
    }
  })


  return NextResponse.json(updatedBin, { status: 201 })
}