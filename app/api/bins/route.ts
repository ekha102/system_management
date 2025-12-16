import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
  const body = await request.json();
  const {bin_name, bin_desc} = body;
  const createBin = await prisma.bin.create({
    data: {
      bin_name: "Bin",
      bin_desc
    }
  })
  // console.log(body);
  return NextResponse.json(createBin, {status:201})
}